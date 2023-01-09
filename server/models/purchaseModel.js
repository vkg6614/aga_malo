import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  heading: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  income: { type: Number, required: true },
  cycle: { type: Number, required: true },
  initialAmount: { type: Number, required: true },
  buy: { type: Number, default: 0 },
  update: { type: Number, default: 0 },
});

const Purchase = mongoose.model("purchase", purchaseSchema);

export default Purchase;
