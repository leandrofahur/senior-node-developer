import { test, expect } from "vitest";
import app from "../server";

test("should get a list of tasks", async () => {
  const res = await app.get("/tasks");
  expect(res.status).toBe(200);
  // Add more assertions as needed
});

// Add more tests for POST, PUT, DELETE, etc.
