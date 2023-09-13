import React, { useState, useEffect } from "react";
import NavBar from "../components/navbarComponents/NavBar";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showOtpEntry, setShowOtpEntry] = useState(false);
  const [num, setNum] = useState('');
  const [pnumber,setPnumber]=useState([])
  const [numbers,setNumbers]=useState([])

  const defaultOtp = "1234";
  // New state for OTP entry
  
  const nav=useNavigate();

  // user data entry for account

  // const [name,setName]=useState("User");
  // const [num,setNum]=useState("");

  
  function handleMobile(event){
    setNum(event.target.value)
  } 

  useEffect(() => {
    const isValidMobile = /^\d{10}$/.test(phone);
    setIsValid(isValidMobile);
  }, [phone]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "number") setPhone(value);
    // setPhone(event.target.value);
  };

  const handleSendOtp = () => {
    if (!isValid) {
      alert("Enter a valid phone number!!!");
    } else {
      alert("OTP sent successfully");

      setShowOtpEntry(true);
    }
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(numbers)
    event.preventDefault();
    if (otp === defaultOtp) {
      alert("OTP matched! Submission successful.");
      const ispresent=pnumber.some(item=>item.number===phone)
      if(!ispresent)
      {
        dataPost()
      }
      localStorage.setItem('number',phone)
      localStorage.setItem('login',true)
      nav("/diesel-clone/profile")

    } else {
      alert("Incorrect OTP. Please try again.");
    }

    // Handle form submission
  };

  // Entering data of users




  async function dataPost()
  {   
    
    const obj={
      number:phone,
    };
    let res = await fetch("https://diesel-clone.onrender.com/user",{
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      }
    });
    console.log(obj)
  }

  //fetching all the data from json
  async function fetchData() {
    try {
      let res = await fetch("https://diesel-clone.onrender.com/user");
      let data = await res.json();
      setPnumber(data)
      // console.log(pnumber)
      const numm=pnumber.map(item=>item.number);
      // console.log(data)
      // console.log(numm)
      setNumbers(numm)
      console.log('numbers',numbers)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      <div className="loginbox">
        <div className="container">
          <div className="form">
            <h1>Hi there!</h1>
            <div className="inside">
              <label className="label">SignIn or SignUp</label>
              <input
                placeholder="Mobile Number*"
                required
                type="tel"
                maxLength="10"
                onChange={handleChange}
                name="newnumber"
                autoComplete="off"
                id="number"
                className="textinputbox"
                value={phone}
                pattern="[0-9]{10}"
              />
              {showOtpEntry && (
                <div style={{ marginTop: "16px" }}>
                  <label className="label">Enter OTP</label>
                  <input
                    className="otpInput"
                    placeholder="Enter OTP"
                    required
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {showOtpEntry ? (
                  <button
                    style={{
                      background: "black",
                      textAlign: "center",
                      width: "50%",
                    }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    style={{
                      background: "black",
                      textAlign: "center",
                      width: "50%",
                    }}
                    type="button"
                    // disabled={!isValid}
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
