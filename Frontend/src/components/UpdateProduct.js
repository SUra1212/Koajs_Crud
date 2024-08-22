import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const [Product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    function getProduct() {
      axios
        .get(`http://localhost:3003/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProduct();
  }, []);

  function sendData(e) {
    e.preventDefault();

    const UpdateProduct = Product;

    axios
      .put(`http://localhost:3003/products/${id}`, UpdateProduct)
      .then(() => {
        alert("updated success");
        navigate("/");
      })

      .catch((err) => {
        alert(err);
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={sendData}>
        <h1>update product</h1>
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
              <b>Update</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
