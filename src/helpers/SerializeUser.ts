import Usuario from "../models/User";

interface SerializedUser{
    id: number;
    nombre: string;
    email: string;
    profile: string;    
}

export const SerializeUser = (usuario: Usuario): SerializedUser => {

    return {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        profile: usuario.profile
    }

    
}