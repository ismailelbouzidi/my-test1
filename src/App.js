import './App.css';
import Login1 from './component/Login1';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acc from './component/Acc';
import Login from './component/Login';
import MyProfile from './component/MyProfile';
import Them from './component/Them';


function App() {

 
  return (
    <div className="App">
     <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path=""  element={<Them/>} />
          <Route path="/register" element={<Login1/>}/>
          <Route path="/Acc" element={<Acc/>} />
          <Route path="/Them" element={<Them/>} />
          <Route path="/MyProfile" element={<MyProfile/>} />
        </Routes>
     </Router> 



    
    </div>
  );
}

export default App;


