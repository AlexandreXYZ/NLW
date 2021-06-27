import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../Repositories/TagsRepositories";



export class ListTagService{
  async execute(){
    const tagRepositories = getCustomRepository(TagRepositories);
    const tag = await tagRepositories.find()
    return tag
  }
}