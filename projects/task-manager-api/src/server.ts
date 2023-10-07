import express from "express";
import taskRoutes from "./routes/tasks";

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the task routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // Export for testing
