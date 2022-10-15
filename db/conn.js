const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://0.0.0.0:27017/SOPA2");
  console.log("conectou ao mongoose");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
