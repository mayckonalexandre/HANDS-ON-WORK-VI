require("dotenv").config();
import express from "express";
import cors from "cors";
import { router } from "./route";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(router);
app.listen(process.env.PORT, () =>
  console.log(`Server running port: ${process.env.PORT}`)
);