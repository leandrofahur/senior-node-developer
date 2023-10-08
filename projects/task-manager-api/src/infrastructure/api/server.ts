import express from "express";
import taskRoutes from "@infrastructure/api/routes/tasks";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the task routes
app.use("/tasks", taskRoutes);

export default app; // Export for testing
