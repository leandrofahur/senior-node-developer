import { Router } from "express";
import taskService from "@api/services/taskService";

const router = Router();

router.get("/", (req, res) => {
  const tasks = taskService.findAll();
  res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
  const task = taskService.findById(req.params.id);
  res.status(200).json(task);
});

router.post("/", (req, res) => {
  const task = taskService.create(req.body);
  res.status(201).json(task);
});

router.put("/:id", (req, res) => {
  const task = taskService.update({ id: req.params.id, ...req.body });
  res.status(200).json(task);
});

router.delete("/", (req, res) => {
  const tasks = taskService.deleteAll();
  res.status(200).json(tasks);
});

router.delete("/:id", (req, res) => {
  const task = taskService.deleteById(req.params.id);
  res.status(200).json(task);
});

export default router;
