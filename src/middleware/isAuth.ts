import { verify } from 'jsonwebtoken'
import { Request, Response, NextFunction }  from 'express'

import AppError from '../errors/AppError'
import AuthConfig from '../config/auth'


interface TokenPayload {
    id: number;
    username: string; 
    profile: string;
    iat: number;
    expt: number;
}
 
 

const isAuth = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        throw new AppError("ERR_SESSIONN_EXPIRED",401)

    const [, token] = authHeader.split(" ")
    //or  const token = authHeader.split(" ")[1];

    if (!token) 
        return next(new AppError("Token no proporcionado", 401));
    

    try{    

        
        const decoded = verify(token, AuthConfig.secret) 
        const {id, profile} = decoded as TokenPayload

        req.user = {id, profile }

    }catch(err){
        console.log(err)
        throw new AppError("Token Invalido, trataremos de asignarle uno nuevo en la siguiente petición",403)
    }


    return next()
    
}


export default isAuth