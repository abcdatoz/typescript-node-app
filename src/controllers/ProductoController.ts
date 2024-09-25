import {Request, Response} from 'express'

import ListProductosService from '../services/ProductosServices/ListProductosService'
import CreateProductoService from '../services/ProductosServices/CreateProductoService'
import UpdateProductoService from '../services/ProductosServices/UpdateProductoService'
import DeleteProductoService from '../services/ProductosServices/DeleteProductoService'

interface ProductoData {
    clave: string;
    nombre: string;
    precio: number;
    categoriaId: number;
}

export const list = async(req: Request, res: Response): Promise<Response> => {

    const productos = await ListProductosService()

    return res.status(200).json(productos)

}


export const add = async (req: Request, res: Response): Promise<Response> => {

    const newProducto: ProductoData = req.body

    const producto = await CreateProductoService(newProducto)

    return res.status(200).json(producto)

} 

export const edit  = async (req:Request, res: Response): Promise<Response> => {
    
    const productoData: ProductoData = req.body
    const {productoId} = req.params

    const producto = await UpdateProductoService({productoData, productoId})

    return res.status(200).json(producto)
}

export const remove = async (req: Request, res: Response): Promise<Response> => {
    const {productoId} = req.params

    await DeleteProductoService(productoId)

    return res.status(200).json({message: 'El producto fue eliminado'})
}




// let clave =  newProducto.clave
// let nombre = newProducto.nombre
// let precio = newProducto.precio
// let categoriaId = newProducto.categoriaId
// const producto = await CreateProductoService({clave, nombre, precio, categoriaId})