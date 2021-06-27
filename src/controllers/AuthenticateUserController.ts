import { Request, Response } from "express";
import { AuthentificateUserService } from "../services/AuthenticateUserService";



export class AuthenticateUserController{
  async handle(request: Request, response: Response){
    const {email, password} = request.body

    const authentificateUserService = new AuthentificateUserService();
    const token = await authentificateUserService.execute({email, password})
    
    return response.json(token);
  }
}