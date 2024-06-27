import { car, carCreate } from "../entities/entities";
import { connection } from "../config/db";

export interface ICarRepository {
  getAll: () => Promise<car[]>;
  create: (car: carCreate) => Promise<number>;
}

export class CarRepository implements ICarRepository {
  private readonly conn = connection;
  async getAll() {
    const connection = await this.conn;
    const [rows] = await connection.execute("SELECT * FROM car");
    return rows as car[];
  }

  async create(car: carCreate) {
    const { modelo, marca, ano, cor } = car;
    const connection = await this.conn;
    const [result] = await connection.execute(
      "INSERT INTO car (modelo, marca, ano, cor) VALUES (?, ?, ?, ?)",
      [modelo, marca, ano, cor]
    );
    const insertId = (result as any).insertId;
    return insertId;
  }
}
