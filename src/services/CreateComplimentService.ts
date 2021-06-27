import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../Repositories/ComplimentsRepositories";
import { UsersRepositories } from "../Repositories/UserRepositories";

interface IComplimentService{
  tag_id: string,
  user_reciver: string,
  user_sender:string,
  messege:string
}
export class CreateComplimentService{
  async execute({tag_id, user_reciver, user_sender, messege}: IComplimentService){
    const complimentRepositories = getCustomRepository(ComplimentRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userReciverExist = await usersRepositories.findOne(user_reciver);

    if(user_sender === user_reciver){
      throw Error("User incorrect");
    }

      if(!userReciverExist){
        throw Error("User not exist")
      }

      const compliment = complimentRepositories.create({
        tag_id,
        user_reciver,
        user_sender,
        messege
      })
      await complimentRepositories.save(compliment);
      return compliment
  }
}