import express from 'express'
import v1Router from './routes/v1/index.js';
import v2Router from './routes/v2/index.js';
import { genericErrorHandler } from './middlewares/error.middleware.js';
const app=express();
const PORT:number=3000;
app.use('/api/v1',v1Router)
app.use('api/v2',v2Router)
// app.use(genericErrorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
    // console.log(process.env);
    
})