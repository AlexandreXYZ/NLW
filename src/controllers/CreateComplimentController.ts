import { Request, Response} from "express"
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
  async handle(request: Request, response: Response){
    const {tag_id, user_reciver, messege} = request.body;
    const {user_id} = request;
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({tag_id, user_reciver, user_sender:user_id, messege});

    return response.json(compliment);
    
  }
}
