import 'bootstrap/dist/css/bootstrap.min.css';
import './Login1.css';
import './Them.css';
import { useState,useRef,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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


function Them() {

   
    let navigate = useNavigate();
    const [Id, setId] = useState('');
    
    
    

    // //La fonction pour modifier les informations:
    // const Changer = async (e,vari) => {
    //     e.preventDefault();
    //     sessionStorage.setItem("Them",Id);
    //     navigate("/register");
        
    // }
    const Changer1 = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("Them","5");
        navigate("/register");
    }
    const Changer2 = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("Them","5");
        navigate("/register");
    }
    const Changer3 = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("Them","5");
        navigate("/register");
    }
    const Changer4 = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("Them","5");
        navigate("/register");
    }
    const Changer5 = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("Them","5");
        navigate("/register");
    }
    
        
    
        return (
            <div className='bodyT'>
            
            <Navbar className="row p-2 d-flex" color="light">
            <NavbarBrand className='col-7 d-flex justify-content-start ms-4' href="/">
              <img alt="logo" src="Nexadz.png" className='' style={{height: 25,width: 100}}/>
            </NavbarBrand>
            <NavbarText className='col-3 d-flex justify-content-end me-2'>
              <Link className='btn btn-primary text-light' to={"/login"}>Login <img alt="" src="box-arrow-right.svg" className='ms-lg-2'/></Link>
            </NavbarText>
        
        </Navbar>    
        <div className='container-lg mt-3'>
            <div className='row'>

           <div class="card col-lg-3 p-2 ms-lg-5" onClick={ Changer1 } >
            <img src="T1.png" class="card-img-top" alt="tmp"/>
                <div class="card-body">
                    <h5 class="card-title ">Theme 1</h5>   
                </div>
            </div>

            <div class="card col-lg-3 p-2 ms-lg-5" onClick={Changer2}>
            <img src="T2.png" class="card-img-top" alt="tmp"/>
                <div class="card-body">
                    <h5 class="card-title">Theme 2</h5>   
                </div>
            </div>

            <div class="card col-lg-3 p-2 ms-lg-5" onClick={Changer3}>
            <img src="T3.png" class="card-img-top" alt="tmp"/>
                <div class="card-body">
                    <h5 class="card-title">Theme 3</h5>   
                </div>
            </div>

            <div class="card col-lg-3 p-2 ms-lg-5 mt-lg-4" onClick={Changer4}>
            <img src="T4.png" class="card-img-top" alt="tmp"/>
                <div class="card-body">
                    <h5 class="card-title">Theme 4</h5>   
                </div>
            </div>

            <div class="card col-lg-3 p-2 ms-lg-5 mt-lg-4" onClick={Changer5}>
            <img src="T5.png" class="card-img-top" alt="tmp"/>
                <div class="card-body">
                    <h5 class="card-title">Theme 5</h5>   
                </div>
            </div>

            </div>
            </div>
            
        </div>
        );
     
        
      }
      
      export default Them;
      