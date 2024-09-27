import Categoria from '../../models/Categoria'
import Producto from '../../models/Producto'
import AppError from '../../errors/AppError'

const DeleteCategoriaService = async(id: string): Promise<void> => {

    const categoria = await Categoria.findOne({
        where : { id }
    })

    if(!categoria){
        throw new AppError("La categoria no fue localizada", 404)
    }


    const productos = await Producto.findAll({ where: {categoriaId: id}})

    if (productos.length > 0) 
        throw new AppError("La categoria no puede ser eliminada ya que ha sido ocupada en productos",409)


    await categoria.destroy()

}


export default DeleteCategoriaService