import { category, categoryCreate } from "../entities/entities";
import { ICategoryRepository } from "../repository/category.repository";

interface ICategoryService {
   getAll: () => Promise<category[]>;
   create: (category: categoryCreate) => Promise<number>;
}

export class CategoryService implements ICategoryService {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async getAll() {
    return await this.categoryRepository.getAll();
  }

  async create(category: categoryCreate) {
    return await this.categoryRepository.create(category);
  }
}
