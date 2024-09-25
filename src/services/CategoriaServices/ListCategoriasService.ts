import {Sequelize, Op} from 'sequelize'
import Categoria from '../../models/Categoria'


interface Request {
    searchParam?: string;
    pageNumber?: string;   
}

interface Response {
    categorias: Categoria[];
    count: number;
    hasMore: boolean;
}
const ListCategoriasService = async ({
    searchParam = "",
    pageNumber = "1"
}: Request): Promise<Response>  => {

    const whereCondition = {
        [Op.or]: [
            {
                nombre: Sequelize.where(
                    Sequelize.fn("LOWER", Sequelize.col("nombre")),
                    "LIKE",
                    `%${searchParam.toLowerCase().trim()}%`
                )
            }
        ]
    }

    const limit = 50
    const offset = limit * (+pageNumber - 1)

    const { count, rows: categorias } = await Categoria.findAndCountAll({
        where:  whereCondition,
        limit,
        offset,
        order: [["clave","ASC"]]
    })

    const hasMore = count > offset + categorias.length


    return {
        categorias,
        count,
        hasMore
    }

}

export default ListCategoriasService;