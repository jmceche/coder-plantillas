const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const productRouter = require("./routes/productos.js");

const PORT = process.env.PORT || 8080
const app = express();

app.engine('hbs', handlebars({
  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: __dirname + "/views/layouts",
}))
app.use(express.static(path.join(__dirname, "static")))

app.set("view engine", "hbs")
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/productos", productRouter)

app.get("/", (req, res) => {
  res.send("OK")
})


app.listen(8080, () => {
  console.log('Runing on PORT ' + PORT)
}).on('error', console.error)