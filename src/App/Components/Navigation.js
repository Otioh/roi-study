import React from "react";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faBookOpen,
  faDashboard,
  faGear,
  faSearch,
  faUser,
  faPercent,
  faCertificate,
  faMoneyBill,
  faPhone,
  faPowerOff,
  faHome,
  faVideo,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Navigation({ active }) {
    let navigate=useNavigate()
  return (
    <header id="header" className="header site-bg">
      <div className="menu-container">
        <button
          className={`menu ${active === "Home" && "active"}`}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>{" "}
        </button>
        <button
          className={`menu ${active === "Activities" && "active"}`}
          onClick={() => {
            navigate("/activities");
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>{" "}
        </button>
        <button
          className={`menu ${active === "Exercise" && "active"}`}
          onClick={() => {
            navigate("/exercise");
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>{" "}
        </button>
        <button
          className={`menu ${active === "Payments" && "active"}`}
          onClick={() => {
            navigate("/payments");
          }}
        >
          <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>{" "}
        </button>

        <button
          className={`menu ${active === "Profile" && "active"}`}
          onClick={() => {
            navigate("/profile");
          }}
        >
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{" "}
        </button>
      </div>
      <div className="">
        <span
          style={{ textDecoration: "none", fontSize: "xx-large" }}
          className="logo d-flex align-items-center"
        >
          <img
            style={{ width: "50px", borderRadius: "20px" }}
            src={logo}
            alt=""
          />
          <span className="d-none d-lg-block">Roi Study</span>
        </span>
      </div>
    </header>
  );
}

export default Navigation;
