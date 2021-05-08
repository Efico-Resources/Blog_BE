import { Request, Response } from 'express'

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const getRequest = (req: Request, res: Response, next: any) => {
    console.log(req)
}