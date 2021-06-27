import "reflect-metadata"
import express, {Response, Request, NextFunction} from 'express';
import "express-async-errors";
import "./database"
import { router } from "./routes"

const app = express();
app.use(express.json())
app.use(router);
app.use((err: Error, request:Request, response:Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    err_meseage: "Internal Server Error"
  })
})

app.listen(3001, ()=> console.log('Server started!'))