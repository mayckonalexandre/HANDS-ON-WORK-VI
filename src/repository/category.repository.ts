import { connection } from "../config/db";
import { category, categoryCreate } from "../entities/entities";

export interface ICategoryRepository {
  getAll: () => Promise<category[]>;
  create: (category: categoryCreate) => Promise<number>;
}

export class CategoryRepository implements ICategoryRepository {
  private conn = connection;
  async getAll() {
    const connection = await this.conn;
    const [rows] = await connection.execute("SELECT * FROM category");
    return rows as category[];
  }

  async create(category: categoryCreate) {
    const { nome_categoria, capacidade_passageiros, tipo_combustivel } =
      category;
    const connection = await this.conn;
    const [result] = await connection.execute(
      "INSERT INTO category (nome_categoria, capacidade_passageiros, tipo_combustivel) VALUES (?, ?, ?)",
      [nome_categoria, capacidade_passageiros, tipo_combustivel]
    );
    const insertId = (result as any).insertId;
    return insertId;
  }
}