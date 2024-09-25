import * as Yup from 'yup'
import AppError from '../../errors/AppError'
import Categoria from '../../models/Categoria'


interface Request {
    clave: string;
    nombre: string;    
}

const CreateCategoriaService = async (categoriaData: Request): Promise<Categoria> => {

    const { clave, nombre } = categoriaData

 
    if (clave == undefined || nombre == undefined){
        throw new AppError("No capturo los datos de la categoria")
    }

    
    const categoria = await Categoria.create({clave, nombre})

    return categoria

}


export default CreateCategoriaService