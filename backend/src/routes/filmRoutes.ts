import express from "express";

import filmController from "../controllers/filmController";

const router = express.Router();

router.post("/", filmController.create);
router.get("/", filmController.getAll);
router.get("/:id", filmController.getById);
router.put("/:id", filmController.update);
router.delete("/:id", filmController.delete);

export default router;
