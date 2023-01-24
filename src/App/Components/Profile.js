import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import pro from '../Images/user.png';
import GlobalContext from './Context/Api';
import axios from 'axios';

function Profile() {
  const {user, host}=useContext(GlobalContext);
const [payments, setpayments] = useState([]);
useEffect(()=>{
axios.get(host+'payments/'+user.email).then((response)=>{
   setpayments(response.data.data)
})
}, [])
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

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/#/profile" data-bs-toggle="dropdown" onClick={()=>{
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

      <li className="nav-item ">
        <a className="nav-link collapsed" href="/#/dashboard">
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
        <a className="nav-link " href="/#/profile">
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

  <main id="main" class="main" style={{backgroundColor:'#f6f9ff'}}>

<div class="pagetitle">
  <h1>Profile</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">Users</li>
      <li class="breadcrumb-item active">Profile</li>
    </ol>
  </nav>
</div>

<section class="section profile">
  <div class="row">
    <div class="col-xl-4">

      <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src={pro} alt="Profile" class="rounded-circle"/>
          <h2>{user.first_name} {user.surname}</h2>
          <h3>{user.email}</h3>
          <div class="social-links mt-2">
            <a href="/#/" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="/#/" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="/#/" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="/#/" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

    </div>

    <div class="col-xl-8">

      <div class="card">
        <div class="card-body pt-3">
          
          <ul class="nav nav-tabs nav-tabs-bordered">

            <li class="nav-item">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
            </li>

            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
            </li>

            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
            </li>

            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
            </li>

          </ul>
          <div class="tab-content pt-2">

            <div class="tab-pane fade show active profile-overview" id="profile-overview">
             
              <h5 class="card-title">Profile Details</h5>

              <div class="row">
                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                <div class="col-lg-9 col-md-8">{user.first_name} {user.surname}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Reg No</div>
                <div class="col-lg-9 col-md-8">{user.reg_no}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">LGA</div>
                <div class="col-lg-9 col-md-8">{user.lga}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">State</div>
                <div class="col-lg-9 col-md-8">{user.state}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Address</div>
                <div class="col-lg-9 col-md-8">{user.address}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Phone</div>
                <div class="col-lg-9 col-md-8">{user.phone}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Email</div>
                <div class="col-lg-9 col-md-8">{user.email}</div>
              </div>

            </div>

            <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

              
              <form>
                <div class="row mb-3">
                  <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div class="col-md-8 col-lg-9">
                    <img src="assets/img/profile-img.jpg" alt="Profile"/>
                    <div class="pt-2">
                      <a href="/#/" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                      <a href="/#/" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="fullName" type="text" class="form-control" id="fullName" value="Kevin Anderson"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                  <div class="col-md-8 col-lg-9">
                    <textarea name="about" class="form-control" id="about" style={{height: "100px"}}>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">Company</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="company" type="text" class="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Job" class="col-md-4 col-lg-3 col-form-label">Job</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="job" type="text" class="form-control" id="Job" value="Web Designer"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="country" type="text" class="form-control" id="Country" value="USA"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="phone" type="text" class="form-control" id="Phone" value="(436) 486-3538 x29071"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="email" type="email" class="form-control" id="Email" value="k.anderson@example.com"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#"/>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>

            </div>

            <div class="tab-pane fade pt-3" id="profile-settings">

              
              <form>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                  <div class="col-md-8 col-lg-9">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="changesMade" checked/>
                      <label class="form-check-label" for="changesMade">
                        Changes made to your account
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="newProducts" checked/>
                      <label class="form-check-label" for="newProducts">
                        Information on new products and services
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="proOffers"/>
                      <label class="form-check-label" for="proOffers">
                        Marketing and promo offers
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
                      <label class="form-check-label" for="securityNotify">
                        Security alerts
                      </label>
                    </div>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>

            </div>

            <div class="tab-pane fade pt-3" id="profile-change-password">
              
              <form>

                <div class="row mb-3">
                  <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="password" type="password" class="form-control" id="currentPassword"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="newpassword" type="password" class="form-control" id="newPassword"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="renewpassword" type="password" class="form-control" id="renewPassword"/>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Change Password</button>
                </div>
              </form>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

</main >
    </div>
  )
}

export default Profile
