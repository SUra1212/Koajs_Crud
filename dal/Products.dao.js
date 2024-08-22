const product = require("./Connection").db("store1").collection("productions");

//object id access to the document based on the _id
const ObjectId = require("mongodb").ObjectId;

//create

const create = async ({ name, price, description }) => {
  const result = await product.insertOne({ name, price, description });
  return result.ops[0];
};

//read all

const GetAllProduct = async () => {
  const pro = await product.find();
  return pro.toArray();
};

//read product by id

const getProductByID = async (id) => {
  return await product.findOne({ _id: ObjectId(id) });
};

//update

const editProduct = async (id, { name, price, description }) => {
  console.log(id);

  const result = await product.replaceOne(
    { _id: ObjectId(id) },
    { name, price, description }
  );
  return result.ops[0];
};

//remove product

const removeByID = async (id) => {
  await product.deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  removeByID,
  editProduct,
  getProductByID,
  GetAllProduct,
  create,
};
