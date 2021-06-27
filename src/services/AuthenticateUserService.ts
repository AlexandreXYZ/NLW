import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UserRepositories";
import { sign } from 'jsonwebtoken'

interface IAuthentificateRequest{
  email: string,
  password: string
}

export class AuthentificateUserService{
  async execute({email, password}: IAuthentificateRequest){
    const userRepositories = getCustomRepository(UsersRepositories);
    const user = await userRepositories.findOne({
      email
    })
    if(!user){
      throw new Error("Email/Password incorrect");
    }
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email,
    }
    ,"f5ffc847c2072ffb5fda82edd30bc19f",
    {
      subject: user.id,
      expiresIn: '1d',
    })
    return token;
  }
}