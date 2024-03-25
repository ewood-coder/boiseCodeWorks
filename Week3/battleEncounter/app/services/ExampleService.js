import { AppState } from "../AppState.js";
import { Example } from "../models/Example.js";

class ExamplesService {
  addMessage(message) {
    AppState.examples.push(new Example(message))
  }
}

export const examplesService = new ExamplesService()