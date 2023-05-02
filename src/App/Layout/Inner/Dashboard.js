import React, { useContext } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff} from '@fortawesome/free-solid-svg-icons';

import GlobalContext from "../../Components/Context/Api";
import Footer from "../../Components/Footer";
import Navigation from '../../Components/Navigation';
import RoundProgress from '../../Components/RoundProgress';

function Dashboard() {
  const {user}=useContext(GlobalContext);

  return (
    <div className="layer">
      <Navigation active={"Home"} />

        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/#/">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <div className="row holder">
          <div className="col-sm-4">
            <div className="card padding margin">
              <RoundProgress value={7} text={"Activities/Lectures"} />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card padding margin">
              <RoundProgress value={75} text={"Exercise(s)"} />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card padding margin">
              <RoundProgress value={50} text={"Certificates"} />
            </div>
          </div>
        </div>
      </div>

  );
}

export default Dashboard
