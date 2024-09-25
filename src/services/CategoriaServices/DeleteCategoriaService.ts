import Categoria from '../../models/Categoria'
import AppError from '../../errors/AppError'

const DeleteCategoriaService = async(id: string): Promise<void> => {

    const categoria = await Categoria.findOne({
        where : { id }
    })

    if(!categoria){
        throw new AppError("La categoria no fue localizada", 404)
    }

    await categoria.destroy()

}


export default DeleteCategoriaService