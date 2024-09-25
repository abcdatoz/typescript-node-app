import Producto from "../../models/Producto";
import AppError from "../../errors/AppError";



const DeleteProductoService = async (id: string): Promise<void> =>{
 
    
    const producto = await Producto.findOne ({
        where: {id}
    })


    if (!producto)
        throw new AppError("El producto no fue localizado",404)

    await producto.destroy()


}


export default DeleteProductoService