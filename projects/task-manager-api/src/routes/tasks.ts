import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  // Logic to create a task
});

router.get("/", (req, res) => {
  // Logic to list tasks
});

router.get("/:id", (req, res) => {
  // Logic to get a specific task by ID
});

router.put("/:id", (req, res) => {
  // Logic to update a task by ID
});

router.delete("/:id", (req, res) => {
  // Logic to delete a task by ID
});

export default router;
