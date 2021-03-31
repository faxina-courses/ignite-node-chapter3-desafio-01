import { Request, Response, Router } from "express";
import { GamesRepository } from "../modules/games/repositories/implementations/GamesRepository";

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

export { usersRoutes };
