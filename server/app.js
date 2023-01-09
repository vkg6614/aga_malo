import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import {
  getAllPurchases,
  createPurchase,
  updatePurchase,
} from "./controllers/purchaseControllers.js";

const app = express();
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;
connectDB(process.env.DB_URL);

app.get("/api/purchases", getAllPurchases);
app.post("/api/purchase", createPurchase);
app.patch("/api/purchase/update/:id", updatePurchase);

app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
});
