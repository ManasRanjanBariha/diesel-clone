import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbarComponents/NavBar";

const adminNum='8342983389';


const UserDetails = () => {
  const nav = useNavigate();
  const name = "New user";
  const [number, setNumber] = useState(""); // Initialize as state

  const [userAdmin,setUserAdmin]=useState(false);
  
  useEffect(() => {
    const storedNumber = localStorage.getItem("number");
    setNumber(storedNumber); 
    
    console.log(userAdmin);
  }, []);
  useEffect(()=>{
    setUserAdmin(number===adminNum)
  },[number])

  const handleLogout = () => {
    localStorage.removeItem("number"); 
    localStorage.setItem('login',false);
    localStorage.removeItem('cartItems')
    
    nav("/diesel-clone/login");
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Your account</h1>
        <div>
          <br />
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </div>
        { userAdmin && <button style={{ background: "#dc3530" ,marginRight:'10px' }} onClick={()=>{
          nav('/diesel-clone/admin')
        }}>
          Admin
        </button>}
        <button style={{ background: "#dc3530" }} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
