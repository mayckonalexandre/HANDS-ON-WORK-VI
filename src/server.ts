require("dotenv").config();
import express from "express";
import cors from "cors";
import { router } from "./route";
import morganBody from "morgan-body";

const app = express();
app.use(express.json());
app.use(cors());
morganBody(app);
app.use(express.static("public"));
app.use(router);
app.listen(process.env.PORT, () =>
  console.log(`Server running port: ${process.env.PORT}`)
);
