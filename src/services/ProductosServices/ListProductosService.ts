import Producto from "../../models/Producto";

const ListProductosService = async(): Promise<Producto[]> => {

    const productos = await Producto.findAll({order: [["clave", "ASC"]] })

    return productos
}


export default ListProductosService