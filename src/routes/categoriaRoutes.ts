import express from 'express'
import * as CategoriaController from '../controllers/CategoriaController'

const categoriaRoutes = express.Router()

categoriaRoutes.get("/api/categorias", CategoriaController.list)
categoriaRoutes.post("/api/categorias", CategoriaController.add)
categoriaRoutes.put("/api/categorias/:categoriaId", CategoriaController.edit)
categoriaRoutes.delete("/api/categorias/:categoriaId", CategoriaController.remove)

export default categoriaRoutes