import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'
import Usuario from '../models/User'
import { profile, } from 'console'

export const createAccessToken = (usuario: Usuario): string => {

    const { secret, expiresIn } = authConfig

    return sign(
        {username: usuario.nombre, profile: usuario.profile, id: usuario.id},
        secret,
        {expiresIn}        
    )
}


export const createRefreshToken = (usuario:Usuario): string => {

    const {refreshSecret, refreshExpiresIn } = authConfig

    return sign (
        {id: usuario.id, tokenVersion: usuario.tokenVersion},
        refreshSecret,
        {expiresIn: refreshExpiresIn}
    )    
}