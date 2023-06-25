const express = require("express");
const app = express();
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "111aaaAAA!",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  let categorydata;

  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
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
    }
  });
});

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
