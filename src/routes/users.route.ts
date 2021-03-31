import { Request, Response, Router } from "express";
import { GamesRepository } from "../modules/games/repositories/implementations/GamesRepository";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

const usersRoutes = Router();

usersRoutes.get(
  "/game/:gameId",
  async (request: Request, response: Response) => {
    const { gameId } = request.params;
    const gamesRepository = new GamesRepository();
    const amontOfgames = await gamesRepository.findUsersByGameId(gameId);
    return response.status(200).send(amontOfgames);
  }
);

usersRoutes.get(
  "/first-name/:firstName/last-name/:lastName",
  async (request: Request, response: Response) => {
    const { firstName, lastName } = request.params;
    const gamesRepository = new UsersRepository();
    const amontOfgames = await gamesRepository.findUserByFullName({
      first_name: firstName,
      last_name: lastName,
    });
    return response.status(200).send(amontOfgames);
  }
);

export { usersRoutes };
