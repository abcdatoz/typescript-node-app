import AppError from "../../errors/AppError";

import { SerializeUser } from '../../helpers/SerializeUser'
import Usuario from "../../models/User";

interface Request {
    email: string;
    password: string;
    nombre: string;
    profile?: string;    
}


interface Response {
    email: string;
    nombre: string;
    id: number;
    profile: string
}


const CreateUsuarioService = async({
    email,
    password,
    nombre,
    profile = "admin"
}: Request): Promise<Response> => {


    if (email == null || nombre == undefined || password == undefined)
        throw new AppError("No capturo todos los datos solicitados")


    const usuario =  await Usuario.create({
        email,
        nombre,
        password,
        profile
    })

    return SerializeUser(usuario)
}


export default CreateUsuarioService