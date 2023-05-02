import React, { useContext, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faKey, faLockOpen, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/logo.png";
import Footer from '../../Components/Footer';
import GlobalContext from "../../Components/Context/Api";
import axios from 'axios';
import Header from '../../Components/Header';



function Login() {
  let navigate=useNavigate();
 const [email, setemail]= useState('');
 const [password, setpassword]=useState('');
const {setloading, setDisplay, setmsg, setstatus,  setuser, host, setisLogin}=useContext(GlobalContext);

  const login=()=>{
    setloading(true)
    axios.post(host+'auth', {email,  password}).then((response)=>{
      setDisplay(true)
      setmsg(response.data.message)
      setloading(false)
if(response.data.status){

  setstatus(true)
setuser(response.data.data[0])
if(response.data.data[0].verified){

setisLogin(true)
  navigate("/programmes");
}else{
  navigate('/verify');
}
  
}else{
  setstatus(false)
}
    })
  }


  return (
    <div
      style={{ backgroundColor: "#f6f9ff", height: "100vh", width: "100vw" }}
    >
     <Header/>

      <main id="main" className="main">
     <br/>
        <section className="section wrappin">
          <div className="row">
            <div className="col-lg-7">
              <div className="card" style={{ width: "400px" }}>
                <div className="card-body course-search-form">
                  <h5 className="card-title">Enter Details to Login</h5>
                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </label>
                    <div className="col-sm-10 ">
                      <input
                        type="email"
                        style={{ width: "90%" }}
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputPassword"
                      className="col-sm-2 col-form-label"
                    >
                      <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                    </label>
                    <div className="col-sm-10 ">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        style={{ width: "90%" }}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-10">
                      <button
                        type="submit"
                        className=" site-btn"
                        onClick={() => {
                          login();
                        }}
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={faLockOpen}
                        ></FontAwesomeIcon>{" "}
                        Login
                      </button>
                      <br />
                      <a href="/#/reset">Forgotten Password?</a>
                    </div>
                  </div>

                  <button
                    style={{ float: "right" }}
                    type="submit"
                    className="btn btn-light"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon>{" "}
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
 
    </div>
  );
}

export default Login