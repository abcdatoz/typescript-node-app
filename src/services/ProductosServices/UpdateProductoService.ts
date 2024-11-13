import AppError from "../../errors/AppError";
import Producto from "../../models/Producto";
import path from "path"
import * as fs from 'fs';

interface ProductoData {
    clave: string;
    nombre: string;
    precio: number;
    categoriaId: number;
    imagen: string;
}

interface Request {
    productoData: ProductoData;
    productoId: string;
}

const UpdateProductoService = async ({productoData, productoId} : Request): Promise<Producto> => {


    const {clave, nombre, precio, categoriaId, imagen} = productoData

    const producto =  await Producto.findOne({
        where:  {id: productoId}
    })

    if (!producto)
        throw new AppError("El producto no fue localizado", 404)


    

    let oldFiles = producto.imagen.split("|")

    oldFiles.forEach( file => {

        let rutacompleta = path.resolve(__dirname, "..","..","..", "public", "productos", file)
        
        
        if (fs.existsSync(rutacompleta))            
            fs.unlinkSync(rutacompleta);
            
        
    })


    await producto.update ({
        clave,
        nombre,
        precio,
        categoriaId,
        imagen
    })


    return producto
}

export default UpdateProductoService