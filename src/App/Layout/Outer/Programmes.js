import React, { useContext, useEffect, useState } from 'react';
import logo from "../../Images/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GlobalContext from '../../Components/Context/Api';
import Footer from '../../Components/Footer';

function Programmes() {
	 const { host } = useContext(GlobalContext);

	const [programmes, setprogrammes] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    axios.get(host + "programmes").then((response) => {
      setprogrammes(response.data.data);
    });
  }, [host]);


  return (
    <>
      {/* <!-- Header section --> */}
      <header class="header-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <div class="site-logo">
                <img src={logo} alt="" />
              </div>
              <div class="nav-switch">
                <i class="fa fa-bars"></i>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <a href="/#/login" class="site-btn header-btn">
                Login
              </a>
              <nav class="main-menu">
                <ul>
                  <li>
                    <a href="/#/index">Home</a>
                  </li>
                  <li>
                    <a href="/#/">About us</a>
                  </li>
                  <li>
                    <a href="/#/courses">Courses</a>
                  </li>
             
                  <li>
                    <a href="/#/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header section end -->


	<!-- Page info --> */}
      <div
        class="page-info-section set-bg"
        
      >
        <div class="container">
          <div class="site-breadcrumb">
            <a href="/#/">Home</a>
            <span>Courses</span>
          </div>
        </div>
      </div>
      {/* <!-- Page info end -->


	<!-- search section --> */}
      <section class="search-section ss-other-page">
        <div class="container">
          <div class="search-warp">
            <div class="section-title text-white">
              <h2>
                <span>Search your course</span>
              </h2>
            </div>
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                {/* <!-- search form --> */}
                <form class="course-search-form">
                  <input type="text" placeholder="Course" />
                  <input type="text" class="last-m" placeholder="Category" />
                  <button class="site-btn btn-dark">Search Couse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- search section end -->


	<!-- course section --> */}
      <section class="course-section spad pb-0">
        <div class="course-warp">
          <div class="row course-items-area">

{
	programmes.map((program)=>{
		return (
      <div class="mix col-lg-3 col-md-4 col-sm-6 finance">
        <div class="course-item">
          <div class="course-thumb set-bg" style={{backgroundImage:'url('+program.image+')'}}>
            <div class="price">Price: NGN {program.fee}</div>
          </div>
          <div class="course-info">
            <div class="course-text">
              <h5>{program.title}</h5>
              <p>{program.description}</p>
              <div class="students">120 Students</div>
            </div>
            <div class="course-author">
              <div class="ca-pic set-bg" data-setbg="img/authors/1.jpg"></div>
              <p>
                {program.cordinator}, <span>Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
	})
}
           
           
          </div>
        </div>
      </section>
      {/* <!-- course section end -->


	<!-- banner section --> */}
      <section class="banner-section spad">
        <div class="container">
          <div class="section-title mb-0 pb-2">
            <h2>Join Our Community Now!</h2>
            <p>
              Start learning in few clicks and be part of our Community of great
              and skillful students
            </p>
          </div>
          <div class="text-center pt-5">
            <a href="/#" class="site-btn">
              Register Now
            </a>
          </div>
        </div>
      </section>
      {/* <!-- banner section end -->


	<!-- footer section --> */}
	<Footer/>
    </>
  );
}

export default Programmes