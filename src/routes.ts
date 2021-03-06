import { response, Router } from "express"
import { MessagesController } from "./controllers/MessagesController";
import { SettingsControllers } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();
const settingsController = new SettingsControllers();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export {routes};