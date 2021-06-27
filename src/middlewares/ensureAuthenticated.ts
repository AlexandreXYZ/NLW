import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Isub {
  sub: string
}

export function ensureAuthenticated(request: Request, response:Response,next:NextFunction){

  const Authtoken = request.headers.authorization;
  if(!Authtoken){
    throw Error("Invaalid Token")
  }
  const [, token] = Authtoken.split(" "); 
  try{
    const {sub} = verify(token, "f5ffc847c2072ffb5fda82edd30bc19f") as Isub;
    request.user_id = sub;
  return next()

  }
  catch(err){
    return response.status(401).end();
  }
}