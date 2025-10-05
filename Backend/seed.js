import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const categories = [
  "Makeup", "Jewelry", "Dress", "Grocery",
  "Home", "Bag", "Stationery", "Watch",
  "Footwear", "Laptop"
];

const imageMap = {
  Makeup: "https://cdn.pixabay.com/photo/2017/08/07/15/53/makeup-2607871_960_720.jpg",
  Jewelry: "https://cdn.pixabay.com/photo/2016/11/29/06/18/necklace-1868393_960_720.jpg",
  Dress: "https://cdn.pixabay.com/photo/2016/03/27/18/38/fashion-1284496_960_720.jpg",
  Grocery: "https://cdn.pixabay.com/photo/2017/08/10/07/32/grocery-2611687_960_720.jpg",
  Home: "https://cdn.pixabay.com/photo/2015/03/26/10/03/kitchen-690139_960_720.jpg",
  Bag: "https://cdn.pixabay.com/photo/2016/11/29/01/11/bag-1866582_960_720.jpg",
  Stationery: "https://cdn.pixabay.com/photo/2016/02/19/10/00/office-1209640_960_720.jpg",
  Watch: "https://cdn.pixabay.com/photo/2015/09/05/21/51/watch-925067_960_720.jpg",
  Footwear: "https://cdn.pixabay.com/photo/2016/11/29/04/17/shoes-1868412_960_720.jpg",
  Laptop: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
};

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    await Product.deleteMany();

    const products = [];

    for (let i = 1; i <= 100; i++) {
      const cat = categories[Math.floor(Math.random() * categories.length)];
      products.push({
        name: `${cat} Product ${i}`,
        category: cat,
        price: Math.floor(Math.random() * 5000) + 200,
        image: imageMap[cat],
      });
    }

    await Product.insertMany(products);
    console.log("✅ Seeded 100 products!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
};

seedProducts();
