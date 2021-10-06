const express = require("express");
const path = require("path");
const productRouter = require("./routes/productos.js");

const PORT = process.env.PORT || 8080
const app = express();

app.use(express.static(path.join(__dirname, "static")))

app.set("views", "./views")
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/productos", productRouter)

app.get("/", (req, res) => {
  res.send("OK")
})


app.listen(8080, () => {
  console.log('Runing on PORT ' + PORT)
}).on('error', console.error)