import express from 'express'
import * as ProductoController from '../controllers/ProductoController'

const productoRoutes = express.Router()

productoRoutes.get ("/api/productos", ProductoController.list)
productoRoutes.post("/api/productos", ProductoController.add)
productoRoutes.put("/api/productos/:productoId", ProductoController.edit)
productoRoutes.delete("/api/productos/:productoId", ProductoController.remove)

export default productoRoutes