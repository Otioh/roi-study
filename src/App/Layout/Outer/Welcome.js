import React, { useContext, useEffect, useState } from 'react';
import logo from "../../Images/logo.png";
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GlobalContext from '../../Components/Context/Api';

function Welcome() {
      const {  host } = useContext(GlobalContext);
const [programmes, setprogrammes] = useState([]);

    let navigate=useNavigate()
    useEffect(() => {
      axios.get(host + "programmes").then((response) => {
        setprogrammes(response.data.data);
      });
    }, [host]);

  return (
    <div>
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
                My Account
              </a>
              <nav class="main-menu">
                <ul>
                  <li>
                    <a href="/#/index">Home</a>
                  </li>
                  <li>
                    <a href="/#">About us</a>
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


	<!-- Hero section --> */}
      <section class="hero-section set-bg">
        <div class="container">
          <div class="hero-text text-white">
            <h2>Get The Best Online ICT Courses</h2>
            <p>
              Immerse yourself in real-world learning. Gain the skills to excel
              in the world of business.
              <br /> Don't miss the application window for our world-renowned,
              interactive online courses.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <button
                class="site-btn"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero section end -->


	<!-- categories section --> */}
      <section class="categories-section spad">
        <div class="container">
          <div class="section-title">
            <h2>Our Courses</h2>
            <p>
              Don't miss the application window for our world-renowned,
              interactive online courses.
            </p>
          </div>
          <div class="row">
            {/* <!-- categorie --> */}
            {programmes.map((program) => {
              return (
                <div class="col-lg-4 col-md-6">
                  <div class="categorie-item">
                    <div
                      class="ci-thumb set-bg"
                      style={{ backgroundImage: "url(" + program.image + ")" }}
                    ></div>
                    <div class="ci-text">
                      <h5>{program.title}</h5>
                      <p>{program.description?.substring(0,180)}...</p>
                      <span>NGN {program.fee}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- categories section end -->


	<!-- search section --> */}
      <section class="search-section">
        <div class="container">
          <div class="search-warp">
            <div class="section-title text-white">
              <h2>Search your course</h2>
            </div>
            <div class="row">
              <div class="col-md-10 offset-md-1">
                {/* <!-- search form --> */}

                <input type="text" placeholder="Course" />
                <input type="text" class="last-m" placeholder="Category" />
                <button class="site-btn">Search Couse</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- search section end -->



	{/* <!-- signup section end -->


	<!-- banner section --> */}
      <section class="banner-section spad">
        <div class="container">
          <div class="section-title mb-0 pb-2">
            <h2>Join Our Community Now!</h2>
            <p>
             Start learning in few clicks and be part of our Community of great and skillful students
            </p>
          </div>
          <div class="text-center pt-5">
            <a href="/#/register" class="site-btn">
              Register Now
            </a>
          </div>
        </div>
      </section>
      {/* <!-- banner section end -->


	<!-- footer section --> */}
      <Footer />
    </div>
  );
}

export default Welcome