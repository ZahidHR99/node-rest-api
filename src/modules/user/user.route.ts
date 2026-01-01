import { Router } from "express";
import * as UserController from "./user.controller";

const router = Router();

router.post("/", UserController.create);
router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.remove);

export default router;
