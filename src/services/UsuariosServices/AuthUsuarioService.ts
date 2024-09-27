import Usuario from "../../models/User";
import AppError from "../../errors/AppError";
import {createAccessToken, createRefreshToken } from '../../helpers/CreateTokens'
import { SerializeUser } from "../../helpers/SerializeUser";

interface SerializedUsuario {
    id: number;
    nombre: string;
    email: string;
    profile: string;
}


interface Request {
    email: string;
    password: string;
}

interface Response {
    serializedUsuario: SerializedUsuario,
    token: string,
    refreshToken: string
}

const AuthUsuarioService = async({
    email,
    password
}: Request
): Promise<Response> => {


    const usuario = await Usuario.findOne({ where: { email }})

    if(!usuario)
        throw new AppError("Credenciales Invalidas", 401)

    if (!(await usuario.checkPassword(password)))
        throw new AppError("Credenciales Invalidas", 401)

    const token = createAccessToken(usuario)
    const refreshToken = createRefreshToken(usuario)

    const serializedUsuario = SerializeUser(usuario)

    return {
        serializedUsuario,
        token,
       refreshToken 
    }
    
}

export default AuthUsuarioService