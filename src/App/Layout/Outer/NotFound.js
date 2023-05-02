import React, { useContext, useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../Components/Context/Api";
import Footer from "../../Components/Footer";

function NotFound() {
  const { host } = useContext(GlobalContext);

  const [programmes, setprogrammes] = useState(["React JS"]);

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
      <div class="page-info-section set-bg">
        <div class="container">
          <div class="site-breadcrumb">
            <a href="/#/">Home</a>
            <span>Not Found</span>
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
                <span>404 Error</span>
              </h2>
            </div>
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
               <h2>
                Requested Resource Not Found
               </h2>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default NotFound;
