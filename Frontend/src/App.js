import { useEffect, useState } from "react";
import AllProdcut from "./components/AllProdcut";
import UpdateProduct from "./components/UpdateProduct";
import CreateProduct from "./components/CreateProduct";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [loggedUser, setloggedUser] = useState(null);

  useEffect(() => {
    setloggedUser(localStorage.getItem("token"));
  }, []);

  return (
    <div>
      <Router>
        <Navbar/>
        {loggedUser !== null }
        <Routes>
          <Route
            exact
            path="/"
            element={loggedUser !== null ? <AllProdcut /> : <Login />}
          />
          <Route path="/main" element={<AllProdcut />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
          <Route path="/products/:id" element={<UpdateProduct />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
