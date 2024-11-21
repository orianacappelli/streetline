import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
});

const Product = (mongoose.models && mongoose.models.Product) 
  ? mongoose.models.Product 
  : mongoose.model("Product", productSchema);

export default Product;
//todas las claves que va a tener el producto, tiene que matchear con mongo