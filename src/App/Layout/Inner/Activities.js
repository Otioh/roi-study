import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

import GlobalContext from "../../Components/Context/Api";
import axios from 'axios';
import Navigation from '../../Components/Navigation';

function Activities() {
  const {user, host}=useContext(GlobalContext);
const [payments, setpayments] = useState([]);
useEffect(()=>{
axios.get(host+'payments/'+user.email).then((response)=>{
   setpayments(response.data.data)
})
}, [])
  return (
    <div>
 <Navigation active={"Activities"}/>
  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}}>

  <div className="pagetitle">
      <h1>Programme Activities</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
       
          <li className="breadcrumb-item active">Programme</li>
        </ol>
      </nav>
    </div>

    <section className="section">
      <div className="row">
        

      <div class="card">
            <div class="card-body">
              <h5 class="card-title">Carousel with fade transition</h5>
              <p>Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>

              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <video controls width={'100%'}>
    <source src=''>
    </source>

</video>
                  </div>
                 
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>

              </div>
            </div>
            <div style={{width:'100%', marginBottom:'20px'}}>
            <button className='btn '><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Previous</button>
<button className='btn'>  Next <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
            </div>
        


        <div className="col-lg-12">


          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Description</h5>

              

            </div>
          </div>

        </div>
      </div>
    </section>


  </main>
 
    </div>
  )
}

export default Activities
