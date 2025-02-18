import AppError from "../../errors/AppError";
import Producto from "../../models/Producto";

interface Request {
    clave: string;
    nombre: string ;
    precio: number;
    categoriaId: number;
    imagen: string;
}


const CreateProductoService = async (data: Request): Promise<Producto> => {

    const {clave, nombre, precio, categoriaId, imagen} = data

    if (clave == undefined || nombre == undefined || precio == undefined || categoriaId == undefined
        || precio == 0 
        || categoriaId == 0)        
            throw new AppError("No se capturaron todos los datos del producto")


    const producto = await Producto.create ({
        clave, nombre, precio, categoriaId, imagen
    })

    return producto
}

export default CreateProductoService 