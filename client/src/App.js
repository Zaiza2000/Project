import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import LandingPage from './components/page/LandingPage';
import LoginPage from './components/page/LoginPage';
import SignUpPage from './components/page/SignUpPage';
import Navbar from './components/layouts/Navbar';

// Layout

// Page Admin
import HomeAdmin from './components/page/admin/HomeAdmin';

// Page Member
import HomeMember from './components/page/member/HomeMember';

//functions
import { currentUser } from './components/functions/auth';

//redux
import { useDispatch } from 'react-redux';

function App() {
  const dispatch  = useDispatch()

  //token
  const idtoken = localStorage.token;
  if (idtoken){
    currentUser(idtoken)
    .then(res=>{
      console.log(res.data);
      dispatch({
        type:'LOGIN',
        payload: {
          token:res.data.token,
          username:res.data.username,
          role:res.data.role
        }
      });

    }).catch(error=>{
      console.log(error);
    })

  }
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<LandingPage />} />
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          
          <Route path="/admin/index" element={<HomeAdmin />} />
          <Route path="/member/index" element={<HomeMember />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
