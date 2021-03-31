import { Request, Response, Router } from "express";
import { GamesRepository } from "../modules/games/repositories/implementations/GamesRepository";

const gamesRoutes = Router();

gamesRoutes.get(
  "/title/:title",
  async (request: Request, response: Response) => {
    const { title } = request.params;
    const gamesRepository = new GamesRepository();
    const games = await gamesRepository.findByTitleContaining(title);
    return response.status(200).send(games);
  }
);

export { gamesRoutes };
