import request from "supertest";
import app from "../../src/server";
import { ITask } from "@domain/interfaces/ITask";

describe("GET /tasks", () => {
  it("should return an empty array if there is no task", async () => {
    const response = await request(app).get("/tasks");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe("GET /tasks/:id", () => {
  it("should get the task by id", async () => {
    const newTask = {
      title: "Task 1",
      description: "Description 1",
      isCompleted: false,
    };

    await request(app).post("/tasks").send(newTask);

    const response = await request(app).get("/tasks/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: "1",
      title: "Task 1",
      description: "Description 1",
      isCompleted: false,
    });

    await request(app).delete("/tasks");
  });
});

describe("POST /tasks", () => {
  it("should create a new task", async () => {
    const newTask = {
      title: "Task 1",
      description: "Description 1",
      isCompleted: false,
    };

    const response = await request(app).post("/tasks").send(newTask);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: "1", ...newTask });

    await request(app).delete("/tasks");
  });
});

describe("PUT /tasks/:id", () => {
  it("should update the task by id", async () => {
    const newTask = {
      title: "Task 1",
      description: "Description 1",
      isCompleted: false,
    };

    await request(app).post("/tasks").send(newTask);

    const updatedTask = {
      title: "Task 2",
      description: "Description 2",
      isCompleted: true,
    };

    const response = await request(app).put("/tasks/1").send(updatedTask);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: "1", ...updatedTask });

    await request(app).delete("/tasks");
  });
});

describe("DELETE /tasks", () => {
  it("should return an empty array", async () => {
    await request(app).delete("/tasks");
    const response = await request(app).get("/tasks");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe("DELETE /tasks/:id", () => {
  it("should delete the task by id and return an empty array", async () => {
    const newTask = {
      title: "Task 1",
      description: "Description 1",
      isCompleted: false,
    };

    const response = await request(app).post("/tasks").send(newTask);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: "1", ...newTask });

    await request(app).delete("/tasks/1");
    const getResponse = await request(app).get("/tasks");
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toEqual([]);
  });
});
