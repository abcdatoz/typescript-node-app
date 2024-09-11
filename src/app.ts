import "./bootstrap"
import "express-async-errors"
import express, {Request, Response, NextFunction} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


import "./database"
import uploadConfig from "./config/upload"
import AppError from "./errors/AppError"



const app = express()

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
)

app.use (cookieParser())
app.use(express.json())
app.use("/public", express.static(uploadConfig.directory))

app.get('/',(req,res)=>{ res.json({messsage:'this is Rio...'}) })

//app.use(routes)

app.use(async (err: Error, req: Request, res: Response, _: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({error: err.message})
    }

    return res.status(500).json({error: "Internal server error"})
}) 



export default app