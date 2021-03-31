import { Router } from "express";
import { gamesRoutes } from "./games.route";
import { usersRoutes } from "./users.route";

const router = Router();

router.use("/users", usersRoutes);
router.use("/games", gamesRoutes);

export { router };
