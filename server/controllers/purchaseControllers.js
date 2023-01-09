import Purchase from "../models/purchaseModel.js";

const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).send(purchases);
  } catch (error) {
    console.log(error);
  }
};

const createPurchase = async (req, res) => {
  const purchase = await Purchase.create(req.body);
  res.status(201).send(purchase);
};

const updatePurchase = async (req, res) => {
  const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).send(purchase);
};

export { getAllPurchases, createPurchase, updatePurchase };
