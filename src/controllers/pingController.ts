import express, { Request, Response } from 'express'

const pingHandler = (req:Request,res:Response)=>{
    console.log('pong');
    res.send('pong')
}

export default pingHandler;