import express from "express";
import morgan from "morgan";
import path from "path";

import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(paymentRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(3000);
console.log("Server on port", 3000);
