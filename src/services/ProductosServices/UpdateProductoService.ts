import AppError from "../../errors/AppError";
import Producto from "../../models/Producto";

interface ProductoData {
    clave: string;
    nombre: string;
    precio: number;
    categoriaId: number;
}

interface Request {
    productoData: ProductoData;
    productoId: string;
}

const UpdateProductoService = async ({productoData, productoId} : Request): Promise<Producto> => {


    const {clave, nombre, precio, categoriaId} = productoData

    const producto =  await Producto.findOne({
        where:  {id: productoId}
    })

    if (!producto)
        throw new AppError("El producto no fue localizado", 404)

    await producto.update ({
        clave,
        nombre,
        precio,
        categoriaId
    })


    return producto
}

export default UpdateProductoService