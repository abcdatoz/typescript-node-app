import express from 'express'
import multer from 'multer'
import isAuth from "../middleware/isAuth"
import * as ProductoController from '../controllers/ProductoController'

import { setupStorage } from '../config/upload'


    const productoRoutes = express.Router()
    
    const storage = setupStorage("productos")
    const upload = multer({storage: storage});
    

    productoRoutes.get ("/api/productos", ProductoController.list)
    productoRoutes.post("/api/productos", [isAuth, upload.array('imagen',3)], ProductoController.add)
    productoRoutes.put("/api/productos/:productoId", [isAuth, upload.array('imagen',3)], ProductoController.edit)
    productoRoutes.delete("/api/productos/:productoId", [isAuth],ProductoController.remove)

export default productoRoutes