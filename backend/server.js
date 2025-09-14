const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Example route for products
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Chicken Wings", price: 50, quantity: 10 },
    { id: 2, name: "Fries", price: 30, quantity: 20 }
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
