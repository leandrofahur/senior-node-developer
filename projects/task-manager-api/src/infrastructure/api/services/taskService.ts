import { Task } from "@domain/entities/Task";
import { ITask } from "@domain/interfaces/ITask";

class TaskService {
  // This is a mock-up in-memory storage for tasks.
  // Later on, we will replace this with a database.
  private tasks: ITask[] = [];

  public findAll(): ITask[] {
    return this.tasks;
  }

  public findById(id: string): ITask | null {
    return this.tasks.find((task) => task.id === id) || null;
  }

  public create({ title, description, isCompleted }: ITask): ITask {
    // the id will be the position of the task in the array for now!
    const task = new Task(
      String(this.tasks.length + 1),
      title,
      description,
      isCompleted
    );

    this.tasks.push(task);
    return task;
  }

  public update({ id, title, description, isCompleted }: ITask): ITask {
    const task = this.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;

    return task;
  }

  public deleteById(id: string): void {
    const task = this.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public deleteAll(): ITask[] {
    this.tasks = [];
    return this.tasks;
  }
}

// Singleton pattern
export default new TaskService();
