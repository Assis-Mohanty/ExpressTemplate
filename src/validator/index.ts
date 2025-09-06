import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";


export const validateBody=(schema:ZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
            await schema.parseAsync(req.body);
            console.log('Request body is valid');
            next();
        }
        catch{
            res.status(400).json({
                message:"Invalid request body",
                success:false,
                error:error
            })
        }
    }
}
export const validateQuery=(schema:ZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
            await schema.parseAsync(req.);
            console.log('Request query is valid');
            next();
        }
        catch{
            res.status(400).json({
                message:"Invalid request query",
                success:false,
                error:error
            })
        }
    }
}
