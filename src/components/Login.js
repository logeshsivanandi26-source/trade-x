import { data, useNavigate } from "react-router-dom"
import logimage from "../Media/Login.png"
import './Log.css'
import { useState } from "react";
import tradelogo from '../Media/tradinglogo.png'
export default function Login(){
    const navigate= useNavigate();

    const [logindata,setLogindata]=useState({
        Email:"",
        Password:""
    });
   function check() {

    let users = JSON.parse(
        localStorage.getItem("UserDetails") || "[]"
    );

    console.log("Login Data:", logindata);
    console.log("Users:", users);

    const user = users.find((data) => {

        return (
            data.Email.trim().toLowerCase() ===
            logindata.Email.trim().toLowerCase()
            &&
            data.Password === logindata.Password
        );

    });

    if (user) {

        console.log("USER FOUND:", user);

        alert("Logged In");

        localStorage.setItem(
            "LoggedinUsers",
            JSON.stringify(user)
        );

        navigate("/dashboard");

    } else {

        console.log("USER NOT FOUND");

        alert("Wrong Email or Password");

    }
}
    return(
    <div id="logbg">
        <nav className="navbar">
                        <a className="navbar-brand" href="#">
                            <div className="d-flex">
              <img src={tradelogo} className="img-fluid" alt="" width="60" height="30"></img>
              <h3 className="text-black mt-4" style={{fontFamily:"Black Ops One",fontWeight:"bold"}} id="trade">Trade X</h3>
              </div>
            </a>
            
        </nav>
        <div className="card container position-absolute top-50 start-50 translate-middle bg-white mt-5" id="log">
            <div className="row">
                <div className="col-lg-6 p-4" id="logbg1">
                    <h4 id="log1">WELCOME BACK</h4>
                    <p id="log2">
                        Please enter your registered details
                    </p>
                    <div className="d-flex align-items-center gap-2 mb-4">
                        <label id="log3">Email</label>
                        <input
                            type="email"
                            className="form-control ms-5"
                            value={logindata.Email}
    onChange={(e) =>
        setLogindata({
            ...logindata,
            Email: e.target.value
        })
    }
                        />
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <label id="log3">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={logindata.Password}
    onChange={(e) =>
        setLogindata({
            ...logindata,
            Password: e.target.value
        })
    }
                        />
                    </div>
                    <button type="button" id="btn2" className="btn mt-5 ms-5 px-4" onClick={check}>Login</button>
                </div>
                <div className="col-lg-6 p-0">
                    <img
                        src={logimage}
                        className="img-fluid w-100 h-100"
                        alt="Trading"
                    />
                </div>
            </div>
        </div>
    </div>
)
}