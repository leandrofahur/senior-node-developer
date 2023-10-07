import { Router } from "express";
import taskService from "@api/services/taskService";

const router = Router();

router.get("/", (req, res) => {
  // Logic to get all tasks
  const tasks = taskService.findAll();
  res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
  // Logic to get a specific task by ID
});

router.post("/", (req, res) => {
  // Logic to create a task
});

router.put("/:id", (req, res) => {
  // Logic to update a task by ID
});

router.delete("/:id", (req, res) => {
  // Logic to delete a task by ID
});

export default router;
