import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faGenderless, faKey, faLocation, faLocationDot, faLocationPin, faPhone, faPlaceOfWorship, faUser,  faUserLock} from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import GlobalContext from "../../Components/Context/Api";
import Navigation from '../../Components/Navigation';

function Register() {
const [first_name, setfirst_name] = useState("");
const [surname, setsurname] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");
const [password, setpassword] = useState("");
const [address, setaddress] = useState('');
const [lga, setlga] = useState('');
const [state, setstate] = useState('');
const [gender, setgender] = useState('');

const {setDisplay, setmsg, setstatus, setloading, host}=useContext(GlobalContext);


  const register=()=>{
    setloading(true)
    axios.post(host+'students', {first_name, surname, email, phone, password, address, lga, state, gender}).then((response)=>{
      setDisplay(true)
      setmsg(response.data.message)
      setloading(false)
if(response.data.status){
  setstatus(true)
  setfirst_name('');
  setemail('');
  setpassword('');
  setphone('');
  setsurname('');
  setaddress('');
  setlga('');
  setstate('');
  setgender('');


}else{
  setstatus(false)
}
    })
  }
  return (
    <div style={{backgroundColor:'#f6f9ff', height:'90vh'}}>
    <Navigation/>

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
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Residential Address' value={address} onChange={(e)=>{
                        setaddress(e.target.value)
                      }} />
                    </div>
                  </div>



                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='LGA of Origin' value={lga} onChange={(e)=>{
                        setlga(e.target.value)
                      }} />
                    </div>
                  </div>




                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='State of Origin' value={state} onChange={(e)=>{
                        setstate(e.target.value)
                      }} />
                    </div>
                  </div>



                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faGenderless}></FontAwesomeIcon>
                    </label>
                    <div className="col-sm-10">
                      <input type="radio" name='gender' className="" placeholder='Password' value='Male' onChange={(e)=>{
                        setgender(e.target.value)
                      }} />
                      Male <input type="radio" name='gender' className="" placeholder='Password' value='Female' onChange={(e)=>{
                        setgender(e.target.value)
                      }} />
                      Female
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
