import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faKey, faPhone, faUser, faUserEdit, faUserLock} from '@fortawesome/free-solid-svg-icons'
import logo from '../Images/logo.png';
import axios from 'axios';
import GlobalContext from './Context/Api';

function Register() {
const [first_name, setfirst_name] = useState("");
const [surname, setsurname] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");
const [password, setpassword] = useState("");

const {setDisplay, setmsg, setstatus, setloading}=useContext(GlobalContext);


  const register=()=>{
    setloading(true)
    axios.post('http://localhost:8000/students', {first_name, surname, email, phone, password}).then((response)=>{
      setDisplay(true)
      setmsg(response.data.message)
      setloading(false)
if(response.data.status){
  setstatus(true)
  setfirst_name('');
  setemail('');
  setpassword('');
  setphone('');
  setsurname('')


}else{
  setstatus(false)
}
    })
  }
  return (
    <div style={{backgroundColor:'#f6f9ff', height:'90vh'}}>
    <header id="header" className="header fixed-top d-flex align-items-center">
  
      <div className="d-flex align-items-center justify-content-between">
        <a href="/#/" style={{textDecoration:'none'}} className="logo d-flex align-items-center">
          <img src={logo} alt=""/>
          <span className="d-none d-lg-block">Roi Study</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
  
     
  
    </header>

    <main id="main" className="main" >
  
      <div className="pagetitle">
        <h1>Register</h1>
        
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-7">
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enter Details to Register</h5>

                  <div className="row mb-3">
                    <label for="inputFName" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='First Name' value={first_name} onChange={(e)=>{
                        setfirst_name(e.target.value)
                      }} />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label for="inputSName" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Surname' value={surname} onChange={(e)=>{
                        setsurname(e.target.value)
                      }} />
                    </div>
                  </div>


                  <div className="row mb-3">
                    <label for="inputPhone" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="tel" className="form-control" placeholder='Phone Number' value={phone} onChange={(e)=>{
                        setphone(e.target.value)
                      }} />
                    </div>
                  </div>



                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" placeholder='E-Mail' value={email} onChange={(e)=>{
                        setemail(e.target.value)
                      }} />
                    </div>
                  </div>


                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                    </label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e)=>{
                        setpassword(e.target.value)
                      }} />
                    </div>
                  </div>

                  
                <div className="row mb-3">
                 
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={()=>{
                      console.log('clicked');
                      register()
                    }}> <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon> Register</button>
                     <br/>
                    <a href='/#/login'  className=" btn-outline-primary">Login?</a>
                
                  </div>
                </div>


              </div>
            </div>
  
          </div>
  
        
        </div>
      </section>
  
    </main>


    </div>
  )
}

export default Register
