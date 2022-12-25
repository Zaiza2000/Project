import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import LandingPage from './components/page/LandingPage';
import LoginPage from './components/page/LoginPage';
import SignUpPage from './components/page/SignUpPage';
import Navbar from './components/layouts/Navbar';

// Layout

// Page Admin

// Page Member
function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
