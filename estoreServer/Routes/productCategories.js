const express = require("express");
const productCategories = express();
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "111aaaAAA!",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

productCategories.get("/", (req, res) => {
  let categorydata;

  // res.status(200).send("Connection Established.");
  pool.query("Select * from categories", (error, categories) => {
    if (error) {
      categorydata = error;
      res.status(500).send(categorydata);
    } else {
      categorydata = categories;
      res.status(200).send(categorydata);
    }
  });
});

module.exports = productCategories;
