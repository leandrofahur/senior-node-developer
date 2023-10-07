import request from "supertest";
import app from "../../src/server";

describe("GET /task", () => {
  it("should list all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
  });

  it("should get a specific task by ID", async () => {
    const res = await request(app).get("/tasks/1");
    expect(res.status).toBe(200);
  });
});

describe("POST /task", () => {
  it("should create a new task", async () => {
    // const res = await request(app).post("/tasks").send(taskData);
    // expect(res.status).toBe(201);
    // expect(res.body.title).toBe(taskData.title);
    // expect(res.body.description).toBe(taskData.description);
    // expect(res.body.completed).toBe(taskData.completed);
  });
});
