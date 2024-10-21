// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Routes } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';

// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type:type
        })
        setTimeout(() =>{
            setAlert(null)
        }, 2000)
   }
  const ToggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#071c36';
      console.log("Light is error")
      showAlert("Dark mode has been enabled", "success");
      document.title = "StarText- Dark Mode"
// experince flashing effects o n website
    //   setInterval(()=>{
    //       document.title = "Star text is best"
    //   }, 2000)
    //   setInterval(()=>{
    //     document.title = "Your wifi is slow "
    // }, 1500)
    }
    else{
setMode('light');
document.body.style.backgroundColor = 'white';
showAlert("Light mode has been enabled", "success");
document.title = "StarText- Home";
    }
  }
//   const RedMode = ()=>{
//     if(mode === 'light'){
//       setMode('danger');
//       document.body.style.backgroundColor = 'red';
//       showAlert("Red mode has been enabled", "success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
// showAlert("Light mode has been enabled", "success");
//   }
// }
  return (
  <>
  {/* <Router> */}
<Navbar title="STAR TEXT" Aboutdetail = "About US" mode = {mode} ToggleMode = {ToggleMode}  />
{/* {RedMode={RedMode}} */}
<Alert alert={alert}/>
<div className="container" my3>
      {/* <Switch> */}
        {/* <Routes> */}
          {/* <Route path="/about"> */}
         {/* <Route exact path="/about" element={<About />} /> */}

            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/" element={TextForm} /> */}
{/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Write your most intresting part of Ur Life..." mode = {mode} />} /> */}
<TextForm showAlert={showAlert} heading="Write your most intresting part of Ur Life..." mode = {mode} />
          {/* </Route> */}
          {/* </Routes> */}
      {/* </Switch> */}
</div>
  {/* </Router>  */}
  </>
  );
}

export default App;

