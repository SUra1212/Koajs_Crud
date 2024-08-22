import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllProdcut = () => {
  const [product, setproduct] = useState();
  const [serachItem, setserachItem] = useState([]);

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:3003/products/all")
      ).data;
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function deleteProduct(_id) {
    axios
      .delete("http://localhost:3003/products/" + _id)
      .then((res) => {
        console.log(res.data);

        alert(" deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setproduct(product.filter((product) => product._id !== _id));
  }

  return (
    <div className="container">
      <br></br> <br></br> <br></br>
      <Link to="/CreateProduct">
        <button type="submit" className="btn btn-primary">
          Add new Product
        </button>
      </Link>
      <br></br> <br></br>
      <div className="col-md-9">
        <h4> Now You Can Search </h4>
        <input
          type="search"
          class="form-control round"
          placeholder="Search by id  "
          aria-label="Search"
          onChange={(event) => {
            setserachItem(event.target.value);
          }}
          aria-describedby="search-addon"
        />
      </div>
      <br></br>
      <table className="table table-dark">
        <thead className="">
          <tr>
            <th> ID</th>
            <th>name</th>
            <th>price </th>
            <th>Description</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {product &&
            product
              .map((product) => {
                if (serachItem == "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(serachItem.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => {
                return (
                  <tr>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>

                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/products/${product._id}`}
                      >
                        &nbsp;&nbsp; Update
                      </a>
                    </td>

                    <td>
                      <a
                        className="btn btn-warning"
                        onClick={() => {
                          deleteProduct(product._id);
                        }}
                      >
                        &nbsp;&nbsp; delete
                      </a>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default AllProdcut;
