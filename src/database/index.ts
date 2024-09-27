import { Sequelize } from "sequelize-typescript"

import Usuario from "../models/User"
import Categoria from "../models/Categoria"
import Producto from "../models/Producto"


const dbConfig = require("../config/database")

const sequelize = new Sequelize(dbConfig)

const models = [
    Usuario,
    Categoria,
    Producto
]

sequelize.addModels(models)


// sequelize.sync({ force: false }).then(() => {
//     console.log('Base de datos sincronizada');
//   }).catch((error) => {
//     console.error('Error al sincronizar la base de datos:', error);
//   });

export default sequelize