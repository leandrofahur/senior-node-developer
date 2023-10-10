import app from "@infrastructure/api/server";

const PORT = process.env.DOCKER_SERVER_PORT || 3000;

// TODO: Add a try/catch block to handle errors and the db connection

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🚀`);
});
