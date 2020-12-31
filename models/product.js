const mongoose = require("mongoose");

var ProductSchema = mongoose.Schema({
       name:String,
       price:String,
       quantity:String,

}
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
