import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;

    let users;
    try {
      users = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });
    } catch (e) {
      return response.status(400).json({ error: e.toString() });
    }

    return response.status(201).json(users);
  }
}

export { ListAllUsersController };
