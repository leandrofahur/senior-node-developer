import express from "express";
import taskRoutes from "@api/routes/tasks";

const app = express();
const PORT = process.env.DOCKER_SERVER_PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the task routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🚀`);
});

export default app; // Export for testing
