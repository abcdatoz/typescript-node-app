import AppError from "../../errors/AppError";
import Categoria from "../../models/Categoria";


interface CategoriaData {
    clave: string;
    nombre: string;
}

interface Request {
    categoriaData: CategoriaData;
    categoriaId: string
}

const UpdateCategoriaService = async ({categoriaData, categoriaId } : Request) : Promise<Categoria>  => {

    const {clave, nombre} = categoriaData

    const categoria  = await Categoria.findOne({
        where: {id: categoriaId}
    })


    if (!categoria){
        throw new  AppError("Categoria no encontrada", 404)
    }

    await categoria.update ({
        clave,
        nombre
    })

    return categoria

 
}


export default UpdateCategoriaService