import { Router } from 'express'

import categoriaRoutes from './categoriaRoutes' 
import productoRoutes from './productoRoutes'
import userRoutes from './usuarioRoutes'
import authRoutes from './authRoutes'

const routes = Router()

routes.use (authRoutes)
routes.use (categoriaRoutes)
routes.use (productoRoutes)
routes.use (userRoutes)


export default routes