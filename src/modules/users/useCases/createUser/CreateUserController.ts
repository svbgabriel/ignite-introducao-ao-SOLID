import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    let user;
    try {
      user = this.createUserUseCase.execute({ email, name });
    } catch (e) {
      return response.status(400).json({ error: e.toString() });
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };
