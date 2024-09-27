import Usuario from "../../models/User";
import AppError from "../../errors/AppError";

const DeleteUsuarioService = async(id: string | number): Promise<void> => {

    const usuario = await Usuario.findOne({
        where: {id}
    })

    if (!usuario)
        throw new AppError("El usuario no fue lcoalizado",404)

    ///some validatios there should be here


    await usuario.destroy()

}


export default DeleteUsuarioService