import Usuario from "../../models/User";
import AppError from "../../errors/AppError";


const ShowUsuarioService = async(id: string | number): Promise<Usuario> => {
    const usuario = await Usuario.findOne( {
        where : { id },
        attributes: ['nombre',  'id', 'email', 'profile', 'tokenVersion'],
        order:[['name', 'ASC']]
    })


    if(!usuario)
        throw new AppError('Usuario no localizado',404)
    
    return usuario    
            
}

export default ShowUsuarioService