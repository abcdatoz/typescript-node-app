import {Request, Response} from 'express'

import ListCategoriasService from '../services/CategoriaServices/ListCategoriasService'
import CreateCategoriaService from '../services/CategoriaServices/CreateCategoriaService'
import UpdateCategoriaService from '../services/CategoriaServices/UpdateCategoriaService'
import DeleteCategoriaService from '../services/CategoriaServices/DeleteCategoriaService'

type IndexQuery = {
    searchParam: string;
    pageNumber: string;
}

// type IndexGetCategoriasQuery = {
//     name: string;
//     number: string;
// }

 interface CategoriaData {
     clave: string;
     nombre: string;
 }


export const list = async( req: Request, res: Response): Promise<Response> => {

    const { searchParam, pageNumber} = req.query as IndexQuery


    const { categorias, count , hasMore} = await ListCategoriasService({searchParam, pageNumber})


    return res.json({categorias, count, hasMore})

}

export const add = async (req: Request, res: Response): Promise<Response> => {
    const newCategoria : CategoriaData = req.body

    let clave = newCategoria.clave
    let nombre = newCategoria.nombre

    const categoria =  await CreateCategoriaService({clave, nombre})

    return  res.status(200).json(categoria)

}

export const edit = async (req: Request,res:  Response  ): Promise<Response>  => {


    const categoriaData: CategoriaData = req.body
    const { categoriaId } = req.params

    const categoria = await UpdateCategoriaService({categoriaData, categoriaId})

    return res.status(200).send(categoria)

    
    
}


export const remove = async(req: Request, res: Response): Promise<Response> => {

    const {categoriaId} = req.params

    await DeleteCategoriaService(categoriaId)
     
    return res.status(200).json({ message: 'Categoria Eliminada!!!'})


}