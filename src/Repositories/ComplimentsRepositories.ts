import { EntityRepository, Repository} from "typeorm"
import { compliment } from "../entities/compliment"
@EntityRepository(compliment)
class ComplimentRepositories extends Repository<compliment>{}

export{ComplimentRepositories}