
import React, { useEffect, useState  } from 'react';
import { Fragment } from 'react';
import {Link, useNavigate} from "react-router-dom"
import "./Acc.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';


function Acc(args) {
const now = 60; 


const [nom, setNom] = useState(sessionStorage.getItem("FirstName")+" "+sessionStorage.getItem("LastName"));
 

let navigate = useNavigate();


//quitter l'application
const signout = async (e) => {
  e.preventDefault();
  sessionStorage.clear();
  navigate("/login");

}

  // useEffect(() => {
  //   if(sessionStorage.getItem("IsLogin")!=null){setIsLogin(sessionStorage.getItem("IsLogin"))}
  //   progressInterval = setInterval(() => {
  //     setProgress(prev => prev + 1);
  //   }, 100);
    
  // }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

 
    return (
      <div className='body3'>

        <div className='body2' >
        <Navbar className="row p-2 d-flex" color="light">
        <NavbarBrand className='col-7 d-flex justify-content-start ms-4' href="/">
          <img alt="logo" src="Nexadz.png" className='' style={{height: 25,width: 100}}/>
        </NavbarBrand>
        <NavbarText className='col-3 d-flex justify-content-end'>
          <div className='d-flex'>
            <div><img alt="" src="personW.svg" className=' p-2 mt-2 me-2 img1'/></div>
            <div className='me-3'>
              <div className='txt1'>Administrator</div>
              <div>
              <UncontrolledDropdown>
              <DropdownToggle nav caret>
                {nom}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='d-flex'><div><img alt="" src="person.svg" className='me-2'/></div><Link  className="lnk mb-2 ms-2" to={"/MyProfile"} >View profile</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem className='d-flex'><div><img alt="" src="sigout.svg" className='me-3'/></div><div onClick={signout}>Sign out</div></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              </div>
            </div>
          </div>
        </NavbarText>
      </Navbar>
    </div>

   
    
                
                   
                <div className='div5 ps-5'>Dashboard</div>
                <div className='row d-flex justify-content-center p-5'>
                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Orders</h5>
                              <div class="card-ti">769<label className='lb1 ms-4'>100</label></div>
                              <div className='mt-3'>Compare to last year (2021)</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Products</h5>
                              <div class="card-ti">113<label className='lb1 ms-4'>100</label></div>
                              <div className='mt-3'>Compare to last year (2021)</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Users</h5>
                              <div class="card-ti">32<label className='lb1 ms-4'>100</label></div>
                              <div className='mt-3'>Compare to last year (2021)</div>
                            </div>
                        </div>
                    </div>
                

                    <div className='col-lg-3'>
                        <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Sales</h5>
                              <div class="card-ti">$ 44244504.88<label className='lb1 ms-4'>0</label></div>
                              <div className='mt-3'>Compare to last year (2021)</div>
                            </div>
                        </div>
                    </div>
                
                    </div>

                    <div className='row d-flex justify-content-end'>
                    <div className='col-lg-4 me-4'>
                            <div class="card lst mt-4">
                                <div class="card-body">
                                  <h5 class="card-title">Last Update</h5>
                                  <div class="card-ti mt-5">
                                    <div className='lighn'>
                                        <span class="i1 p-2 d-flex align-items-center justify-content-center rounded svg-icon text-white mr-2"><svg width="30px" height="30px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-lightning-fill"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path></svg></span>
                                        <div className='div15 ms-2'>
                                           <div className='text1'>Total Products</div>
                                           <div className='text2'>1 New Products</div>
                                        </div>
                                    </div>
                                    <div className='lighn mt-2'>
                                    <span class="i2 p-2 d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px text-white mr-2"><svg width="30px" height="30px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-bar-chart-line-fill"><path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"></path></svg></span>
                                        <div className='div15 ms-2'>
                                           <div className='text1'>Total Sales</div>
                                           <div className='text2'>0.00 New Sales</div>
                                        </div>
                                    </div>
                                    <div className='lighn mt-2'>
                                    <span class="i2 p-2 d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px text-white mr-2"><svg width="30px" height="30px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-bar-chart-line-fill"><path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"></path></svg></span>
                                        <div className='div15 ms-2'>
                                           <div className='text1'>Total Order</div>
                                           <div className='text2'>0.00 New Sales</div>
                                        </div>
                                    </div>
                                    <div className='lighn mt-2'>
                                        <span class="i3 p-2 d-flex align-items-center justify-content-center rounded svg-icon text-white mr-2"><svg width="30px" height="30px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-lightning-fill"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path></svg></span>
                                        <div className='div15 ms-2'>
                                           <div className='text1'>Total Users</div>
                                           <div className='text2'>1 New Products</div>
                                        </div>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                         </div>
                         </div>

                         


    </div>
      
      
    );
  }
  
  export default Acc;
  