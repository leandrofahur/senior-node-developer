import { ITask } from "@domain/interfaces/ITask";

export interface ITaskRepository {
  findById(id: string): Promise<ITask | null>;
  findAll(): Promise<ITask[]>;
  save(task: ITask): Promise<void>;
  update(task: ITask): Promise<void>;
  deleteById(id: string): Promise<void>;
  deleteAll(): Promise<void>;
}
