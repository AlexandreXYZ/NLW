import { Request, Response} from "express"
import { ListUserReciverComplimentsService } from "../services/ListUserReciveComplimentsService";

export class ListUserReciverComplimentsController {
  async handle(request: Request, response: Response){
    const {user_id} = request
    const listUserReciverComplimentsService = new ListUserReciverComplimentsService();

    const list = await listUserReciverComplimentsService.execute(user_id);

    return response.json(list);
    
  }
}
