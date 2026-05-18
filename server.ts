import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);




import { app } from "./src/app.js";

const PORT =4000;

const server = app.listen(PORT);

server.on("listening", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Stop the other process (e.g. old node.exe) and restart.`
    );
    process.exit(1);
  }
  throw err;
});