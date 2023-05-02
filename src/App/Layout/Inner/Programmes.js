import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faCoins, faBook, faGear,faPhone, faPowerOff,  faUser } from '@fortawesome/free-solid-svg-icons';

import lap from '../Images/images.jpeg';
import GlobalContext from "../../Components/Context/Api";

import axios from 'axios';
import ProDetails from './ProDetails';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../Components/Navigation';

function Programmes() {
    const {user,  setpop, setloading,  host}=useContext(GlobalContext);

let navigate=useNavigate()

const [programmes, setprogrammes] = useState([]);

useEffect(()=>{
axios.get(host+'programmes').then((response)=>{

    setprogrammes(response.data.data)

  
})
}, [host])



const afterPay =()=>{
  navigate('/dashboard')
  }

   
  return (
    <div>
    
 <Navigation/>
  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}} onClick={()=>{
            document.getElementById('profile').style.display='none'
          }}>

    <div className="pagetitle">
      <h1>Select A Programme</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/#/">Home</a></li>
          <li className="breadcrumb-item active">Programmes</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
      <div className="row">

        
        <div className="col-lg-10">
          <div className="row">
{
  programmes.map((program)=>{
    return<>
       <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

                <div className="filter">
                  <a className="icon" href="/#/login" data-bs-toggle="dropdown"><FontAwesomeIcon icon={faGear} className="bi bi-three-dots"></FontAwesomeIcon></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="/#/login">Today</a></li>
                    <li><a className="dropdown-item" href="/#/login">This Month</a></li>
                    <li><a className="dropdown-item" href="/#/login">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{program.title} <span>| {program.qualification}</span></h5>
                 <div className='row'>
                  <div className='col-sm-5'>

                  </div>
                      <div className='col-sm-4'>

                  </div>
                      <div className='col-sm-3'>

                  </div>
                  </div>
                  <img alt='ProgrammeImage' src={lap} style={{width:'90%'}}/>
                  <div className="d-flex align-items-center">
                   
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faCoins} ></FontAwesomeIcon>
                    </div>
                    <div className="ps-3">
                      <h6>NGN {program.fee}</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">Discount</span>

                    </div>
                  </div>
                  <div style={{width:'100%', padding:'10px'}}>
                  <button style={{width:'95%'}} className='btn btn-primary' onClick={()=>{
                    setloading(true)

                    setpop({display:true, title:`${user.first_name} ${user.surname}  || ${program.title} | ${program.qualification}`, content:<ProDetails afterPay={afterPay}  program={program}/>})

setTimeout(() => {
  setloading(false)
}, 300);
                  }}>
                    Choose Programme
                  </button>

                  </div>
                  <ul className='list-group'>

                    {
                      program.courses.split(',').map((course)=>{
                                 return           <li className='list-group-item'>
{course}
                    </li>

                      })
                    }
                  </ul>
           
                  
                </div>

              </div>
            </div>

    </>
  })
}
          

            
            <div className="col-xxl-4 col-xl-12">

             

            </div>

            
           
    
          </div>
        </div>
         

      </div>
    </section>

  </main>
 
    </div>
  )
}

export default Programmes