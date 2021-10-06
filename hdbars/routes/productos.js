const express = require("express")
const { Router } = express
let products = require("../data");

const router = new Router();

let id = 0

router.get("/submit", (req, res) => {
  res.render("main")

});

router.post("/submit", (req, res) => {
  id++
  products.push({
    id,
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  })
  res.redirect("submit")
})

router.get("/", (req, res) => {
  res.render("list", {products: products})
})


module.exports = router;