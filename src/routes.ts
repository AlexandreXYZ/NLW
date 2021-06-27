import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReciverComplimentsController } from "./controllers/ListUserReciveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagController } from "./controllers/ListTagController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReciverCompliments = new ListUserReciverComplimentsController();
const listUserSenderCompliments = new ListUserSendComplimentsController();
const listTag = new ListTagController();


router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, ensureAuthenticated, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/complimentsReciver", ensureAuthenticated, listUserReciverCompliments.handle);
router.get("/complimentsSender", ensureAuthenticated, listUserSenderCompliments.handle);
router.get("/listTag", ensureAuthenticated, listTag.handle);

export {router};