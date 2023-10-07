import { Task } from "@domain/entities/Task";
import { ITask } from "@domain/interfaces/ITask";

class TaskService {
  // This is a mock-up in-memory storage for tasks.
  // Later on, we will replace this with a database.
  private tasks: ITask[] = [];

  public getAll(): ITask[] {
    return this.tasks;
  }

  public getById(id: string): ITask | null {
    return this.tasks.find((task) => task.id === id) || null;
  }

  public create({ title, description, isCompleted }: ITask): ITask {
    // the id will be the position of the task in the array for now!
    const newTask = new Task(
      String(this.tasks.length + 1),
      title,
      description,
      isCompleted
    );

    this.tasks.push(newTask);
    return newTask;
  }

  public update({ id, title, description, isCompleted }: ITask): void {
    const task = this.getById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;
  }
}

// Singleton pattern
export default new TaskService();
