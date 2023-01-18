import 'bootstrap/dist/css/bootstrap.min.css';
import './Login1.css';
import "./Acc.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login1() {
let progressInterval = null;
let navigate = useNavigate();
const [isToger,setToger] = useState(true);

const [isLogin, setIsLogin] = useState("false");
const [progress, setProgress] = useState(0);

const [FirstName, setFirstName] = useState('');
const [LastName, setLastName] = useState('');
const [Email, setEmail] = useState('');
const [Phone, setPhone] = useState('');
const [Password, setPassword] = useState('');
const [Password2, setPassword2] = useState('');
const [Title, setTitle] = useState('');
const [Slogan, setSlogan] = useState('');
const [Uri, setUri] = useState('');
const FileName= useRef();
const [Them, setThem] = useState(sessionStorage.getItem("Them"));

const registerF = async (e) => {
    e.preventDefault();
    progressInterval = setInterval(() => {
        setProgress(prev => prev + 1);
      }, 10000);
      
    
    if((FileName=="") || (LastName=="") || (Email=="") || (Password=="") || (Phone=="") || (Title=="") || (Slogan=="") || (Uri=="")    ){
            alert("All fields must be completed");
    }
    else{
        if(Password==Password2){
           
            //  const url = "https://signup.nexadz.com/back/creatAc.php";
             const url = "http://localhost/creatAc.php";
    let fdata = new FormData();
    fdata.append("FirstName",FirstName);
    fdata.append("LastName",LastName);
    fdata.append("Email",Email);
    fdata.append("Phone",Phone);
    fdata.append("Password",Password);
    fdata.append("Title",Title);
    fdata.append("Slogan",Slogan);
    fdata.append("Uri",Uri);
    fdata.append("Picture",FileName.current.files[0]);
    fdata.append("Them",Them);
     setIsLogin("true");
    axios.post(url,fdata)
        .then(response => {
            setIsLogin("false");
           if(response.data.rep2=="true"){
                sessionStorage.setItem("FirstName",FirstName);
                sessionStorage.setItem("LastName",LastName);
                sessionStorage.setItem("Id",response.data.rep3);
                navigate("/Acc");
            }
            else{
                alert("The URL already exists");
                setIsLogin("false");
                setProgress(0);
                
            }
            
        })
        .catch(err=>alert("Connection problem"));
        }else{
            alert("The passwords are different");
            setIsLogin("false"); 
            setProgress(0);
        }
    
    }
    
    
    
   
    
}

const clearAt = async (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setPassword2("");
    setTitle("");
    setSlogan("");
    setUri("");
    

    
}

    // return (
    // <div className='body'>
    // <div className="row">
    //     <img src='backImg.png' className='col-md-6 d-none d-md-flex img '/>
    //     <div className="col-lg-6 p-5">
    //         <div className='titre' ><img src='Nexadz.png' width={140} height={30}/></div>

    //         {/* la formulaire 1 */}
    //         {isToger &&  <form className='frm'>
    //             <div class="mt-3">
    //                 {/* <div class="form-label d-flex justify-content-start " >First name</div> */}
    //                 <input type="text" class="form-control" placeholder='First name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
    //             </div>
    //             <div class="mt-3">
    //                 {/* <label class="form-label d-flex justify-content-start">First name</label> */}
    //                 <input type="text" class="form-control" placeholder='Last Name' value={LastName} onChange={(e) => setLastName(e.target.value)}/>
    //             </div>
    //             <div class="mt-3 ">
    //                 {/* <label class="form-label d-flex justify-content-start">Email</label> */}
    //                 <input type="email" class="form-control" placeholder='Email'  value={Email} onChange={(e) => setEmail(e.target.value)}/>
    //             </div>
    //             <div class="mt-3 ">
    //                 {/* <label class="form-label d-flex justify-content-start">Phone number</label> */}
    //                 <input type="text" class="form-control" placeholder='Phone number' value={Phone} onChange={(e) => setPhone(e.target.value)}/>
    //             </div>
    //             <div class="mt-3 ">
    //                 {/* <label class="form-label d-flex justify-content-start">Password</label> */}
    //                 <input type="password" class="form-control" placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
    //             </div>
    //             <div class="mt-3 ">
    //                 {/* <label class="form-label d-flex justify-content-start">Confirm password</label> */}
    //                 <input type="password" class="form-control" placeholder='Confirm password' value={Password2} onChange={(e) => setPassword2(e.target.value)} />
    //             </div>
    //             <div class="row mt-3 p-3 d-flex justify-content-center">
    //                  <button className='btn btn-primary col-4 ms-3 ' onClick={clearAt}> Reset </button>
    //                  <button className='btn btn-primary col-4 ms-3 ' onClick={()=>setToger(!isToger)}> Next </button>
    //             </div>
               
    //         </form>}

    //         {/* La formulaire 2 */}
    //         {!isToger && 
    //         <form className='frm' action='' >
    //             <div class="mt-3">
    //                 {/* <div class="form-label d-flex justify-content-start hh" style={{ display: "none" }}>First name</div> */}
    //                 <input type="text" class="form-control" placeholder='Title' value={Title} onChange={(e) => setTitle(e.target.value)}/>
    //             </div>
    //             <div class="mt-3">
    //                 {/* <label class="form-label d-flex justify-content-start">First name</label> */}
    //                 <input type="text" class="form-control" placeholder='Slogan' value={Slogan} onChange={(e) => setSlogan(e.target.value)} />
    //             </div>
    //             <div class="mt-3 row d-flex justify-content-start">
    //                 {/* <label class="form-label d-flex justify-content-start">Email</label> */}
    //                 <div class="col-9"><input type="text" class="form-control" placeholder='URl' value={Uri} onChange={(e) => setUri(e.target.value)}/></div>
    //                 <div class="col-3"><input type="text" class="form-control" placeholder='nexadz.com' disabled/></div>
    //             </div>

    //             <div class="mt-3 ms-1 row d-flex justify-content-start form-control p-0">
    //                 {/* <label class="form-label d-flex justify-content-start">Email</label> */}
    //                 <input type="file" class="form-control" id="kk" ref={FileName} lang="" />
    //                 {/* <div class="col-3"><label type="text" class="form-control bg-light text-muted com" for="kk">Upload</label></div>
    //                 <div class="col-9"><label type="text" class="form-control text-muted com" for="kk">No file</label></div> */}
    //             </div>


                
    //             <div class="row mt-3 p-3 d-flex justify-content-center">
    //                 <button className='btn btn-primary col-3 ms-3' onClick={()=>setToger(!isToger) }>Back</button>
    //                 <button className='btn btn-primary col-3 ms-3 ' onClick={clearAt} > Reset </button>
    //                 <button className='btn btn-primary col-3 ms-3' onClick={registerF} > Next </button>
    //             </div>
               
    //         </form>}




    //     </div>
    // </div>
       
    // </div>
    // );

    return (
    <div className='body'>
         { (isLogin=="true")  &&
        <div className="row d-flex justify-content-center">
          <div className="col-8 myProg">
            <ProgressBar className="gg" now={progress} label={`${progress}%`}/>
            <div className='text-secondary'>Your website is being created.Please wait, process may take 5 minutes...</div>
          </div>
        </div>}
        {(isLogin=="false")  &&

        
    <div className="row justify-content-center">
       
        <div className="col-6 col-md-6 col-10 p-3 mt-lg-5  my-3 form1">
            
            <div className='row justify-content-center' >
                <div className='col-8 titre mt-5' ><img src='Nexadz.png' width={140} height={30}/></div>
            </div>

            {isToger &&  <form className='frm'>
                <div class="mt-3">
                    {/* <div class="form-label d-flex justify-content-start" >First name</div> */}
                    <input type="text" class="form-control" placeholder='First name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>

            
            {/* la formulaire 1 */}
            
               
                <div class="mt-3">
                    {/* <label class="form-label d-flex justify-content-start">First name</label> */}
                    <input type="text" class="form-control" placeholder='Last Name' value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div class="mt-3 ">
                    {/* <label class="form-label d-flex justify-content-start">Email</label> */}
                    <input type="email" class="form-control" placeholder='Email'  value={Email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="mt-3 ">
                    {/* <label class="form-label d-flex justify-content-start">Phone number</label> */}
                    <input type="text" class="form-control" placeholder='Phone number' value={Phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div class="mt-3 ">
                    {/* <label class="form-label d-flex justify-content-start">Password</label> */}
                    <input type="password" class="form-control" placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="mt-3 ">
                    {/* <label class="form-label d-flex justify-content-start">Confirm password</label> */}
                    <input type="password" class="form-control" placeholder='Confirm password' value={Password2} onChange={(e) => setPassword2(e.target.value)} />
                </div>
                <div class="row mt-3 p-3 d-flex justify-content-center">
                     <Link  className="btn btn-primary col-lg-3  ms-lg-3" to={"/Them"} >Back</Link>
                     <button className='btn btn-primary col-lg-3 mt-2 mt-lg-0 ms-lg-3' onClick={clearAt}> Reset </button>
                     <button className='btn btn-primary col-lg-3 mt-2 mt-lg-0 ms-lg-3' onClick={()=>setToger(!isToger)}> Next </button>
                </div>
               
            </form>}

            {/* La formulaire 2 */}
            {!isToger && 
            <form className='frm' action='' >
                <div class="mt-3 row p-0">
                    {/* <div class="form-label d-flex justify-content-start hh" style={{ display: "none" }}>First name</div> */}
                    <input type="text" class="form-control" placeholder='Title' value={Title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div class="mt-3 row p-0">
                    {/* <label class="form-label d-flex justify-content-start">First name</label> */}
                    <input type="text" class="form-control" placeholder='Slogan' value={Slogan} onChange={(e) => setSlogan(e.target.value)} />
                </div>
                <div class="mt-3 row d-flex justify-content-start p-0">
                    {/* <label class="form-label d-flex justify-content-start">Email</label> */}
                    <div class="col-lg-9 col-6 p-0"><input type="text" class="form-control" placeholder='URL' value={Uri} onChange={(e) => setUri(e.target.value)}/></div>
                    <div class="col-lg-3 col-6 p-0"><input type="text" class="form-control" placeholder='nexadz.com' disabled/></div>
                </div>

                <div class="mt-3  row p-0 d-flex ">
                    {/* <label class="form-label d-flex justify-content-start">Email</label> */}
                    <input type="file" class="form-control" id="kk" ref={FileName} lang="en" />
                    {/* <div class="col-3"><label type="text" class="form-control bg-light text-muted com" for="kk">Upload</label></div>
                    <div class="col-9"><label type="text" class="form-control text-muted com" for="kk">No file</label></div> */}
                </div>


                
                <div class="row mt-3 p-3 d-flex justify-content-center">
                    <button className='btn btn-primary col-lg-3  ms-lg-3' onClick={()=>setToger(!isToger) }>Back</button>
                    <button className='btn btn-primary col-lg-3 mt-2 mt-lg-0 ms-lg-3 ' onClick={clearAt} > Reset </button>
                    <button className='btn btn-primary col-lg-3 mt-2 mt-lg-0 ms-lg-3' onClick={registerF} > Next </button>
                </div>
               
            </form>}




        </div>
    </div>
       }
    </div>
    );
 
    
  }
  
  export default Login1;
  