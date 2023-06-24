const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let prodData = {
    pName: "Jackets",
    price: 45,
    img: "shop-1.jpg",
  };

  res.status(200).send(prodData);
});

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
