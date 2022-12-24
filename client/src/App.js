import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/page/LandingPage';
import LoginPage from './components/page/LoginPage';
import SignUpPage from './components/page/SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
