const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const uiRoutes = require("./routes/ui");
const Product = require("./models/product");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;

mongoose
  .connect("mongodb+srv://snackoverflow-1:XBkhlnCFu8XJqrNm@react-w5-cart.jwafnea.mongodb.net/shopping_cart?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.use("/api", apiRoutes);
app.use("/ui", uiRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
