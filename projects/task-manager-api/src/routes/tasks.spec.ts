import request from "supertest";
import app from "../server";

describe("Tasks API", () => {
  it("should list tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    // Add more assertions based on response body, headers, etc.
  });

  // Similarly, you can write tests for POST, PUT, DELETE, etc.
});
