import express from 'express'
import * as CategoriaController from '../controllers/CategoriaController'
import isAuth from "../middleware/isAuth"

const categoriaRoutes = express.Router()

categoriaRoutes.get("/api/categorias", CategoriaController.list)
categoriaRoutes.post("/api/categorias", isAuth, CategoriaController.add)
categoriaRoutes.put("/api/categorias/:categoriaId", isAuth, CategoriaController.edit)
categoriaRoutes.delete("/api/categorias/:categoriaId", isAuth, CategoriaController.remove)

export default categoriaRoutes