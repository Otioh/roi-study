import React, { useContext } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Images/logo.png';
import pro from '../../Images/user.png';
import GlobalContext from '../Context/Api';

function Dashboard() {
  const {user}=useContext(GlobalContext);

  return (
    <div>
    
  <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <a href="/#/" style={{textDecoration:'none'}} className="logo d-flex align-items-center">
      <img src={logo} alt=""/>
          <span className="d-none d-lg-block">Roi Study</span>
      </a>
      <FontAwesomeIcon icon={faBars} className="bi bi-list toggle-sidebar-btn"></FontAwesomeIcon>
    </div>
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="/#/login">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><FontAwesomeIcon icon={faSearch} className="bi bi-search"></FontAwesomeIcon></button>
      </form>
    </div>
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">





        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/#/dashboard" data-bs-toggle="dropdown" onClick={()=>{
            document.getElementById('profile').style.display='block'
          }}>
            <img src={pro} className="rounded-circle" alt=''/>
            <span className="d-none d-md-block dropdown-toggle ps-2"> {user.first_name} {user.surname}</span>
          </a>
          <ul  id='profile'  className="dropdown-menu ">
            <li className="dropdown-header">
              <h6>{user.first_name} {user.surname}</h6>
              <span>{user.email}</span>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/programmes">
                <FontAwesomeIcon icon={faUser} className="bi bi-person"></FontAwesomeIcon>
                <span>My Profile</span>
              </a>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/programmes">
                <FontAwesomeIcon icon={faGear} className="bi bi-gear"></FontAwesomeIcon>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/programmes">
                <FontAwesomeIcon icon={faPhone} className="bi bi-question-circle"></FontAwesomeIcon>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/login">
                <FontAwesomeIcon icon={faPowerOff} className="bi bi-box-arrow-right"></FontAwesomeIcon>
                <span>Sign Out</span>
              </a>
            </li>

          </ul>
        </li>

      </ul>
    </nav>
  </header>
  <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="/#/dashboard">
          <span> <FontAwesomeIcon icon={faDashboard} className="bi bi-grid"></FontAwesomeIcon> Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/#/activities">
          <span><FontAwesomeIcon icon={faBook} className="bi bi-menu-button-wide"></FontAwesomeIcon> My Programme</span>
        </a>
       </li>
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/exercise">
           <span><FontAwesomeIcon icon={faBookOpen} className="bi bi-journal-text"></FontAwesomeIcon> Exercise</span>
        </a>
         </li>

         <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/certificates">
           <span><FontAwesomeIcon icon={faCertificate} className="bi bi-journal-text"></FontAwesomeIcon> Certificates</span>
        </a>
         </li>
      

         <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/payments">
           <span><FontAwesomeIcon icon={faMoneyBill} className="bi bi-journal-text"></FontAwesomeIcon> Payments</span>
        </a>
         </li>


      <li className="nav-item">
        <a className="nav-link collapsed" href="/#/profile">
          <FontAwesomeIcon icon={faUser} className="bi bi-person"></FontAwesomeIcon> Profile
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="/#/settings">
          <FontAwesomeIcon icon={faGear} className="bi bi-question-circle"></FontAwesomeIcon> <span> Settings</span>
        </a>
      </li>

     

    </ul>

  </aside>

  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}}>

    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
      <div className="row">

        
        <div className="col-lg-8">
          <div className="row">
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
                  <h5 className="card-title">Programme Activity <span>| Progress</span></h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faPercent} className="bi bi-cart"></FontAwesomeIcon>
                    </div>
                    <div className="ps-3">
            
                    
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '56%'}} aria-valuenow="56" aria-valuemin="0" aria-valuemax="100">56%</div>
              </div>
                     <span className="text-muted small pt-2 ps-1">Web Development (Front End)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">

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
                  <h5 className="card-title">My Certificates <span>| Completed</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faCertificate} className="bi bi-currency-dollar"></FontAwesomeIcon>
                    </div>
                    <div className="ps-3">
                      <h6>3</h6>
                      <span className="text-success small pt-1 fw-bold">Certificate(s)</span> <span className="text-muted small pt-2 ps-1"></span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            
            <div className="col-xxl-4 col-xl-12">

              <div className="card info-card customers-card">

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
                  <h5 className="card-title">Exercise <span>| Completed</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faBookOpen} className="bi bi-people"></FontAwesomeIcon>
                    </div>
                    <div className="ps-3">
                      <h6>124</h6>
                      <span className="text-danger small pt-1 fw-bold">12</span> <span className="text-muted small pt-2 ps-1">Remaining</span>

                    </div>
                  </div>

                </div>
              </div>

            </div>

            
            <div className="col-12">
              <div className="card">

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
                  <h5 className="card-title">Results <span>/All</span></h5>

                  <div id="reportsChart"></div>

                </div>

              </div>
            </div>
                <div className="col-12">
              <div className="card recent-sales overflow-auto">

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
                  <h5 className="card-title">Top Learning Materials <span>| for your Programme</span></h5>

                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="/#/login">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="/#/login" className="text-primary">At praesentium minu</a></td>
                        <td>$64</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="/#/login">#2147</a></th>
                        <td>Bridie Kessler</td>
                        <td><a href="/#/login" className="text-primary">Blanditiis dolor omnis similique</a></td>
                        <td>$47</td>
                        <td><span className="badge bg-warning">Pending</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="/#/login">#2049</a></th>
                        <td>Ashleigh Langosh</td>
                        <td><a href="/#/login" className="text-primary">At recusandae consectetur</a></td>
                        <td>$147</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="/#/login">#2644</a></th>
                        <td>Angus Grady</td>
                        <td><a href="/#/login" className="text-primar">Ut voluptatem id earum et</a></td>
                        <td>$67</td>
                        <td><span className="badge bg-danger">Rejected</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="/#/login">#2644</a></th>
                        <td>Raheem Lehner</td>
                        <td><a href="/#/login" className="text-primary">Sunt similique distinctio</a></td>
                        <td>$165</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
                       <div className="col-12">
              <div className="card top-selling overflow-auto">

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

                <div className="card-body pb-0">
                  <h5 className="card-title">Top Selling <span>| Today</span></h5>

                  
                </div>

              </div>
            </div>
          </div>
        </div>
              <div className="col-lg-4">

          {/* <!-- Recent Activity --> */}
          <div className="card">
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
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>

              <div className="activity">

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

export default Dashboard
