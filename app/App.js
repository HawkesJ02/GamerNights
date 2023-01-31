import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayersController } from "./Controllers/Playerscontroller.js";

class App {
  // valuesController = new ValuesController();
playerscontroller = new PlayersController()
}

window["app"] = new App();
