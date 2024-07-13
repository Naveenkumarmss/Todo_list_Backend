
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import todoitems from "./routes/todoitems.js";

const app = express();
const PORT = 3500;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
});
const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log("Connected successfully to the database"));

app.use("/api/v1/", todoitems);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
