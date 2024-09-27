import AppError from "../../errors/AppError";
import { SerializeUser } from "../../helpers/SerializeUser";
import Usuario from "../../models/User";
import ShowUsuarioService from "./ShowUsuarioService";

interface UsuarioData {
    email?: string;
    password?: string;
    nombre?: string;
    profile?: string;
}

interface Request {
    usuarioData: UsuarioData
    usuarioId: string | number
}


interface Response {
    id: number;
    nombre: string;
    email: string;
    profile: string;
}


const UpdateUsuarioService = async({
    usuarioData,
    usuarioId
}: Request
): Promise<Response | undefined> => {

    const usuario = await ShowUsuarioService(usuarioId)


    const {email, password, nombre, profile}  = usuarioData

    await usuario.update({
        email,
        nombre,
        profile,
        password
    })

    return SerializeUser(usuario)


}


export default UpdateUsuarioService