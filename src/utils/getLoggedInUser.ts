import { Request } from 'express'
import { verify } from 'jsonwebtoken'
import { getEnvs } from './env_vars'
import { User } from '../models/User'

export function getAuthUser (req: Request) {
    const token = req.header('token');

    if (token) {
        verify(token, getEnvs().JWT_SECRET, async (error: any, decodedToken: any) => {
            const user = await User.findById(decodedToken.id);
            return user;
        })
    }
}