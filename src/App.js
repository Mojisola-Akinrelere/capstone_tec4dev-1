import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './Components/terms';
import Quiz from './Components/quiz/quiz';
// import { SignupForm, SigninForm } from './Components/LoginSignup/LoginSignup';
import VerificationPage from './Components/LoginSignup/Verification';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import TestMainPage from './Components/quiz/psychometricTest/TestMainPage';
import TestIntroPage from './Components/quiz/psychometricTest/TestIntroPage';
import ExploreCarousel from './Components/Explore/ExploreCarousel';
import AboutUs from './Components/About/aboutus';
import Home from './Components/Home/Home';
import Result from './Components/Result/Result';
import Contact from './Components/Contact/contact';
import { GoToTop } from "go-to-top-react";



function App() {
  return (
    <div className="App">
     <GoToTop />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* <Route path="/register" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} /> */}
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/TestMainPage" element={<TestMainPage/>} />
          <Route path="/TestIntroPage" element={<TestIntroPage/>} />
          
          <Route path="/Explore" element={<ExploreCarousel/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />} /> {/* Add this line */}
        </Routes>
      </Router>

      
    </div>
  );
}

// const SignupPage = () => (
//   <>
//     <SignupForm className="signup-heading" />
//   </>
// );

// const SigninPage = () => (
//   <>
//     <SigninForm className="signin-heading" />
//   </>
// );

  //  <AuthProvider>
  //       <TestMainPage />
  //   </AuthProvider>

export default App;
