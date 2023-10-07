import { ITask } from "@domain/interfaces/ITask";

export class Task implements ITask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;

  constructor(
    id: string,
    title: string,
    description: string,
    isCompleted: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  // additional methods and behaviors associated with a task can be added here.
}
