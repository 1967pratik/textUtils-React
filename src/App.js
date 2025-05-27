import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAleart = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAleart("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }
      , 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }
      , 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAleart("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    // <BrowserRouter>
    <>
      <Navbar title="textUtilies" aboutText="About Text" mode={mode} togglemode={togglemode} />
      <Alert Alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<TextForm heading="Enter the text to analyze below" mode={mode} togglemode={togglemode} />}
          /> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} togglemode={togglemode}/>
        {/* </Routes> */}
      </div>
      </>
    // </BrowserRouter>
  );
}

export default App;
