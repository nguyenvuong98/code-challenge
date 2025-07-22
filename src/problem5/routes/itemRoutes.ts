import express from "express";
import * as itemController from "../controllers/itemController";

const router = express.Router();

router.post("/", itemController.create);
router.get("/", itemController.list);
router.get("/:id", itemController.get);
router.put("/:id", itemController.update);
router.delete("/:id", itemController.remove);

export default router;
