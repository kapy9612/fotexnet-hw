import { execSync } from "child_process";

try {
  // Execute the Prisma generate command
  execSync(`prisma generate`, { stdio: "inherit" });
} catch (error: unknown) {
  // Log an error message if the command fails
  if (error instanceof Error) {
    console.error("Error generating Prisma Client:", error.message);
  }
  process.exit(1);
}
