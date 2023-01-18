
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login1.css';
import { Link } from 'react-router-dom';
import { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyProfile() {

    let navigate = useNavigate();
    const [id,setId] = useState(sessionStorage.getItem("Id"));
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const [Title, setTitle] = useState('');
    const [Slogan, setSlogan] = useState('');
    const [Url, setUrl] = useState('');
    

    //pour recevoir les informations de profil
    useEffect(() => {
        console.log(id);
        //  const urlB = "https://signup.nexadz.com/back/getAc.php";
         const urlB = "http://localhost/getAc.php";
        let fdata = new FormData();
        fdata.append("Id",id);
        axios.post(urlB,fdata)
            .then(response => {
               if(response.data.id=="false"){
                    alert("The user does not exist or another problem");
                }
                else{
                    setFirstName(JSON.stringify(response.data.firstname).replace('"', '').slice(0, -1));
                    setLastName(JSON.stringify(response.data.lastname).replace('"', '').slice(0, -1));
                    setEmail(JSON.stringify(response.data.email).replace('"', '').slice(0, -1));
                    setPassword(JSON.stringify(response.data.passworde).replace('"', '').slice(0, -1));
                    setPhone(JSON.stringify(response.data.phone).replace('"', '').slice(0, -1));
                    setTitle(JSON.stringify(response.data.title).replace('"', '').slice(0, -1));
                    setSlogan(JSON.stringify(response.data.slogan).replace('"', '').slice(0, -1));
                    // console.log(response.data.slogan)
                    setUrl(JSON.stringify(response.data.uri).replace('"', '').slice(0, -5));

                }
                
            })
            .catch(err=>alert("Connection problem"));

        
      }, []);
    
    
    

    // //La fonction pour modifier les informations:
    const Changer = async (e) => {
        e.preventDefault();
        // const url = "https://signup.nexadz.com/back/ChangeAc.php";
        const url = "http://localhost/ChangeAc.php";
            let fdata = new FormData();
            fdata.append("Id",id);
            fdata.append("FirstName",FirstName);
            fdata.append("LastName",LastName);
            fdata.append("Email",Email);
            fdata.append("Phone",Phone);
            fdata.append("Password",Password);
            fdata.append("Title",Title);
            fdata.append("Slogan",Slogan);
            
            axios.post(url,fdata)
                .then(response => {
                    console.log(response.data.rep2)
                   if(response.data.rep2=="true"){
                        navigate("/Acc");
                    }
                    else{
                        alert("Problem");
                    }
                    
                })
                .catch(err=>alert("Connection problem"));
                
            }
        
    
    
        
    
        return (
        <div className='body'>
        <div className="row justify-content-center">
           
                <div className="col-6 col-md-6 col-10 p-3 mt-lg-5  my-3 form1">
                
                <div className='row justify-content-center' >
                    <div className='col-8 titre mt-3' ><img src='Nexadz.png' width={140} height={30}/></div>
                </div>
                
                <form className='frm'>

                    <div class="row mt-1 ">
                        <div class="col-lg-6">
                            <div class="form-label d-flex justify-content-start text-secondary" >First name</div>
                            <input type="text" class="form-control " placeholder='First name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-label d-flex justify-content-start text-secondary" >Last name</div>
                            <input type="text" class="form-control " placeholder='Last name' value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-lg-6">
                            <div class="form-label d-flex justify-content-start text-secondary" >Email</div>
                            <input type="email" class="form-control" placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-label d-flex justify-content-start text-secondary" >Phone number</div>
                            <input type="text" class="form-control" placeholder='Phone number' value={Phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>

                    <div class="row mt-3 ">
                        <div class="form-label d-flex justify-content-start text-secondary" >Password</div>
                        <div class="col-6"><input type="text" class="form-control" placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)}/></div>
                    </div>

                    <div class="row mt-3 ">
                        {/* <label class="form-label d-flex justify-content-start">Phone number</label> */}
                        <div class="col-6"><input type="text" class="form-control" placeholder='Title' value={Title} onChange={(e) => setTitle(e.target.value)}/></div>
                        <div class="col-6"><input type="text" class="form-control" placeholder='Slogan' value={Slogan} onChange={(e) => setSlogan(e.target.value)}/></div>
                    </div>

                    <div class="row mt-3 ">
                        {/* <label class="form-label d-flex justify-content-start">Password</label> */}
                        <div class="col-lg-9 col-6"><input type="text" class="form-control" placeholder='URl' value={Url} onChange={(e) => setUrl(e.target.value)} disabled/></div>
                        <div class="col-lg-3 col-6"><input type="text" class="form-control" placeholder='nexadz.com' disabled/></div>
                    </div>

                    <div class="row mt-3 ">
                        <label class="form-label d-flex justify-content-start text-secondary ms-2">Logo</label>
                        <div class="col-12"><input type="file" class="form-control" /></div>
                    </div>

                    <div class="row mt-3 p-3 d-flex justify-content-center">
                         <Link  className="btn btn-primary col-lg-4" to={"/Acc"} > Back </Link>
                         <button className='btn btn-primary col-lg-4 ms-lg-3 mt-lg-0 mt-2' onClick={Changer}> Change </button>
                    </div>
                </form>
    
                
                
    
    
    
    
            </div>
        </div>
           
        </div>
        );
     
        
      }
      
      export default MyProfile;
      