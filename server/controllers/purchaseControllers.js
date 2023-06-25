import Purchase from "../models/purchaseModel.js";

const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).send(purchases);
  } catch (error) {
    console.log(error);
  }
};

const getSinglePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    res.status(200).send(purchase);
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

export { getAllPurchases, createPurchase, updatePurchase, getSinglePurchase };
