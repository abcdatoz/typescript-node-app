import { Router } from 'express'

import categoriaRoutes from './categoriaRoutes' 
import productoRoutes from './productoRoutes'


const routes = Router()

routes.use (categoriaRoutes)
routes.use (productoRoutes)


export default routes