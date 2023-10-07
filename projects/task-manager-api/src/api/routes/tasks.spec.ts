import request from "supertest";
import app from "../../server";

describe("GET /tasks", () => {
  it("should return an empty array if there is no task", async () => {
    const response = await request(app).get("/tasks");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

// describe("GET /tasks/:id", () => {
//   it("should get the task by id", async () => {});
// });

// describe("POST /tasks", () => {
//   it("should create a new task", async () => {});
// });
