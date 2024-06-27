import { car, carCreate } from "../entities/entities";
import { ICarRepository } from "../repository/car.repository";

interface ICarService {
  getAll: () => Promise<car[]>;
  create: (car: carCreate) => Promise<number>;
}

export class CarService implements ICarService {
  constructor(private readonly carRepository: ICarRepository) {}

  async getAll() {
    return await this.carRepository.getAll();
  }

  async create(car: carCreate) {
    return await this.carRepository.create(car);
  }
}
