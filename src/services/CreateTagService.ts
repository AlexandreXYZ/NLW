import { TagRepositories } from "../Repositories/TagsRepositories";
import { getCustomRepository } from "typeorm";

interface ITagRequest{
  name: string;
  admin: boolean;
}

export class CreateTagService{
  async  execute({name}:ITagRequest){
   
    if(!name){
      throw new Error('incorrect name');
    }
    const tagRepository = getCustomRepository(TagRepositories);
    
    const tagExist = await tagRepository.findOne({
      name
    })
    if(tagExist){
      throw new Error('This tag exists');
    }
    const tag = tagRepository.create({
      name
    })

    await tagRepository.save(tag);
    
    return tag;
  }
}