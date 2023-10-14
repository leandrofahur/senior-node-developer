import app from "@infrastructure/api/server";
import { prisma } from "@infrastructure/database/connection";

const PORT = process.env.DOCKER_SERVER_PORT || 3000;

async function main() {
  try {
    // Connect to the database
    await prisma.$connect();

    app.listen(PORT, () => {
      console.log(`Server is up and running on port ${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
}

main();

// Handle graceful shutdown
process.on("SIGINT", async () => {
  console.log("Gracefully shutting down...");
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Gracefully shutting down...");
  await prisma.$disconnect();
  process.exit(0);
});
