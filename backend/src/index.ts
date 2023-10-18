import express from "express";
import cors from "cors";

import filmRoutes from "./routes/filmRoutes";

const app = express();
const port = 1337;

app.use(express.json());
app.use(cors());

app.use("/api/film", filmRoutes);
app.get("/", (req, res) => {
  res.send("fotexnet hw API running 🥳");
});
app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:1337`),
);
