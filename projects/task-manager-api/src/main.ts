import app from "@infrastructure/api/server";

const PORT = process.env.DOCKER_SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🚀`);
});
