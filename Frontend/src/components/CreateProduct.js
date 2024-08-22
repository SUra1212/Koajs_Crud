import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProduct = () => {
  const [Product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3003/products/add", Product)
      .then(() => {
        alert("New product  Created");
        navigate("/main");
      })
      .catch((err) => {
        alert(err);
      });

    setProduct({
      name: "",
      price: "",
      description: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <h1>Add new product</h1>
        <div className="form-group row">
          <label for="name" className="col-sm-3 col-form-label">
            product Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id=""
              name="name"
              placeholder="Enter product Name"
              onChange={handleChange}
              value={Product.name}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="leaderITNum" className="col-sm-3 col-form-label">
            price
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              placeholder="Enter price"
              onChange={handleChange}
              value={Product.price}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="topicName" className="col-sm-3 col-form-label">
            Product description
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter description"
              onChange={handleChange}
              value={Product.description}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              <b>Add Product</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
