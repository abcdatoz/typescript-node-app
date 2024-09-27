import Usuario from "../../models/User";

const ListUsuariosService = async():Promise<Usuario[]> => {

    
    const usuarios = await Usuario.findAll({
            attributes: ['id', 'nombre', 'email','profile'],
            order: [["nombre","ASC"]]
        })

        

    return usuarios
}


export default ListUsuariosService