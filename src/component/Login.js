import { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
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


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rep, setRep] = useState('false');

  let navigate = useNavigate();

  const loginF = async (e) => {
    e.preventDefault();
    // const url = "https://signup.nexadz.com/back/page11.php";
    const url = "http://localhost/page11.php";
    
    let fdata = new FormData();
    fdata.append("email",email);
    fdata.append("password",password);
    axios.post(url,fdata)
        .then(response => {
            if(response.data.passworde=="false"){
                setEmail("");
                setPassword("");
                
                let x = document.querySelector('.hidden-error').style.display = "block";
                setTimeout(function () { document.querySelector('.hidden-error').style.display = "none" }, 8000)
               
                let y = document.querySelector('.hidden-error1').style.display = "block";
                setTimeout(function () { document.querySelector('.hidden-error1').style.display = "none" }, 8000)
            }
            else{
                sessionStorage.setItem("FirstName",response.data.firstname)
                sessionStorage.setItem("LastName",response.data.lastname)
                sessionStorage.setItem("Id",response.data.id)
                sessionStorage.setItem("IsLogin","true")
                console.log(response.data.lastname);
                console.log(response.data.firstname);
                navigate("/Acc");
            }
        })
        .catch(err=>alert("Connection problem"));
    
    
   
};

  
return (

    <div>
       <Navbar className="row p-2 d-flex" color="light">
        <NavbarBrand className='col-7 d-flex justify-content-start ms-4' href="/">
          <img alt="logo" src="Nexadz.png" className='' style={{height: 25,width: 100}}/>
        </NavbarBrand>
        
    
    </Navbar>
    <div className='body1'>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-10 col-10 div1">
                            <form class="div2">
                                <div class="col-lg-12 mt-4 d-flex justify-content-center ">
                                    <img src={"Nexadz.png"} alt={"img"} width={140} height={30}></img>
                                </div>
                                <div class="col-lg-12 col-12 d-flex justify-content-center mt-1 div4">Please login to your account</div>

                                <div class="row mt-5 ms-2">
                                   <div className='col-lg-2 col-2'><svg width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-person"><path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path></svg></div>
                                   <div className='col-lg-10 col-10'>
                                      <input type="email" class="input2" placeholder="exemple@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                      <div className="hidden-error text-danger col-lg-12 col-12" style={{ display: "none" }}>The email field is required.</div>
                                   </div>
                                </div>
                                

                                <div class="row mt-3 ms-2">
                                    <div className='col-lg-2 col-2'><svg width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-lock"><path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"></path></svg></div>
                                    <div className='col-lg-10 col-10'>
                                        <input type="password" className="input2 " placeholder="......." value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        <div className="hidden-error1 text-danger col-lg-12 col-12" style={{ display: "none" }}>The password field is required.</div>
                                    </div>
                                </div>
                                
                                <div className='row mt-2 justify-content-center'>
                                    <button type="submit" class="btn btn-primary  col-11 mt-5 mb-4" onClick={loginF}>Login<img alt="" src="box-arrow-right.svg" className='ms-2'/></button>
                                </div>
                                <div className='row mt-4 justify-content-center'>
                                <div className='col-lg-9 text-secondary'>Don't have account? <Link  className="lnk mb-2 ms-2" to={"/Them"} > Create Account</Link></div>
                                </div>

                                
                                
                            </form>
                        </div>
                    </div>
                </div>

      
            
            </div>
        </div>
  );
  
  
};
export default Login;