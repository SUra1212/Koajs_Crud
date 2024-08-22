import React,{useEffect,useState} from "react";
import {  useNavigate } from "react-router-dom";

const Navbar =()=>{

    const navigate = useNavigate();

 const [userRole, setuserRole] = useState(null);

 useEffect(() => {
    setuserRole(localStorage.getItem("userRole"));
 }, [])

 const LogOutfunc = (e)=> {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/")
    window.location.reload();
 }


  return (
    <div> <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/main">Home</a>
    <div className="collapse navbar-collapse" >
      <div className="navbar-nav">
      </div>
    </div>
  </div>  
  <button style={{display:userRole !== null ? "flex": "none" , float:"left" , marginLeft:"5px"}} onClick={(e)=>LogOutfunc(e)}>Log Out</button>
</nav>
    </div></div>
  )
}

export default Navbar;