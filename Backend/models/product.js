import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    image: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;

