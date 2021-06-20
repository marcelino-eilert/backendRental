import { Specification } from "../model/Specification";

interface ICreateRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateRepositoryDTO);
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ISpecificationsRepository, ICreateRepositoryDTO };
