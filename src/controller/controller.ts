import { Request, Response } from "express";
import { CarService } from "../services/car";
import { CarRepository } from "../repository/car.repository";
import z from "zod";
import { CategoryService } from "../services/category";
import { CategoryRepository } from "../repository/category.repository";

const carService = new CarService(new CarRepository());
const categoryService = new CategoryService(new CategoryRepository());

export class Controller {
  async getAllCar(req: Request, res: Response) {
    const cars = await carService.getAll();
    return res.status(200).json({ cars });
  }

  async createCar(req: Request, res: Response) {
    try {
      const schema = z.object({
        modelo: z.string().trim(),
        marca: z.string().trim(),
        ano: z.number(),
        cor: z.string().trim(),
      });

      const car = schema.parse(req.body);

      const id = await carService.create(car);

      return res.status(201).json({ id });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: JSON.stringify(error) });
    }
  }

  async getAllCategory(req: Request, res: Response) {
    const categories = await categoryService.getAll();
    return res.status(200).json({ categories });
  }

  async createCategory(req: Request, res: Response) {
    try {
      const schema = z.object({
        nome_categoria: z.string().trim(),
        capacidade_passageiros: z.number(),
        tipo_combustivel: z.string().trim(),
      });

      const category = schema.parse(req.body);

      const id = await categoryService.create(category);

      return res.status(201).json({ id });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: JSON.stringify(error) });
    }
  }
}
