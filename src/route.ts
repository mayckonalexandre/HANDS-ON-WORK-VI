import { Router } from "express";
import { Controller } from "./controller/controller";

export const router = Router();

const controller = new Controller();

router.get("/car/all", controller.getAllCar);
router.post("/car", controller.createCar);
router.get("/category/all", controller.getAllCategory);
router.post("/category", controller.createCategory);
