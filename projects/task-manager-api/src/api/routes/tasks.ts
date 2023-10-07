import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  // Logic to list tasks
  res.status(200).send();
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
