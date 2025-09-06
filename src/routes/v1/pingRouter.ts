import express from 'express'
import pingHandler from '../../controllers/pingController.js'
import { validateBody } from '../../validator/index.js';
import {pingSchema} from '../../validator/pingValidator.js';

const pingRouter=express.Router();
pingRouter.get('/',validateBody(pingSchema),pingHandler);
pingRouter.get('/health',(req,res)=>{
    res.status(200).send('OK')
})
export default pingRouter;
