import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Terms from "./Terms";
import tradelogo from "../Media/tradinglogo.png"
import Login from "./Login";

export default function Register() { 
    const navigate= useNavigate();
    const [form, setForm] = useState({ 
        Name: "",
         Email: "", 
         Mobile: "", 
         Dob: "", 
         Password: "", 
         RePassword: "" }); 
    function handle() {
    console.log("HANDLE CALLED");
    console.log("FORM DATA:", form);

    if (
        !form.Name ||
        !form.Email ||
        !form.Mobile ||
        !form.Dob ||
        !form.Password ||
        !form.RePassword
    ) {
        alert("Please fill all fields");
        return;
    }

    if (form.Password !== form.RePassword) {
        alert("Password does not match");
        return;
    }

    let users = JSON.parse(
        localStorage.getItem("UserDetails") || "[]"
    );

    if (!Array.isArray(users)) {
        users = [users];
    }

    users.push(form);

    localStorage.setItem(
        "UserDetails",
        JSON.stringify(users)
    );

    console.log(
        "SAVED DATA:",
        localStorage.getItem("UserDetails")
    );

    alert("Registration Successful!");

    navigate("/login")
    setForm({
        Name: "",
        Email: "",
        Mobile: "",
        Dob: "",
        Password: "",
        RePassword: ""
    });
}
    
    return (
        <div className="bg">
            <nav class="navbar navbar-light bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={tradelogo} alt="" width="40" height="30" class="d-inline-block align-text-top"></img>
      <b className="text-white">Trade X</b>
    </a>
  </div>
</nav>
<div className="d-md-none d-lg-block">
            <b className="position-absolute top-0 start-50 translate-middle text-white pt-5 mt-5 d-none d-sm-block" id="head" style={{ fontSize: "40px" }}>Register</b>
            </div>
            <div className="card register container position-absolute top-50 start-50 translate-middle mt-5" id="crd" style={{ width: "23rem", height: "550px" }}>
                <div className="card-body">
                    <div>
                        <div className="d-flex gap-5">
                        <label style={{ fontFamily: "Bricolage Grotesque", fontSize: "20px", color: "#D9F7FF" }}>Name</label>
                        <input type="text" placeholder="Enter Your Name" className="ms-2" onChange={(e) => setForm({ ...form, Name: e.target.value })} style={{textTransform:"capitalize"}}></input>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className="d-flex gap-5">
                            <label style={{ fontFamily: "Bricolage Grotesque", fontSize: "20px", color: "#D9F7FF" }}>Email</label>
                            <input type="email" placeholder="Enter Your Email" className="ms-2" onChange={(e) => setForm({ ...form, Email: e.target.value })}></input>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className="d-flex gap-4">
                        <label style={{ fontFamily: "Bricolage Grotesque", fontSize: "20px", color: "#D9F7FF" }}>Mobile</label>
                        <input type="tel" placeholder="Enter Your Mobile No" className="ms-4" onChange={(e) => setForm({ ...form, Mobile: e.target.value })}></input>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className="d-flex gap-5">
                        <label style={{ fontFamily: "Bricolage Grotesque", fontSize: "20px", color: "#D9F7FF" }}>Dob</label>
                        <input type="date" className="ms-4" onChange={(e) => setForm({ ...form, Dob: e.target.value })}></input>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className="d-flex gap-4">
                        <label style={{ fontFamily: "Bricolage Grotesque", fontSize: "20px", color: "#D9F7FF" }}>Password</label>
                        <input type="password" placeholder="Set Password" className="ms-1" onChange={(e) => setForm({ ...form, Password: e.target.value })}></input>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className="d-flex gap-1">
                        <label style={{ fontFamily: "Bricolage Grotesque", fontSize: "20px", color: "#D9F7FF" }}>RePassword</label>
                        <input type="password" placeholder="Confirm Password" onChange={(e) => setForm({ ...form, RePassword: e.target.value })}></input>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <input type="checkbox"></input>
                        <Link to={'/terms&conditions'}>  I Agree to the Terms&Conditions</Link>
                    </div>
             <button className="btn-primary px-4 position-absolute bottom-0 start-50 translate-middle-x mb-3" id="btn1" onClick={handle}>Submit</button>
                </div>
            </div>
        </div>
    )
}
