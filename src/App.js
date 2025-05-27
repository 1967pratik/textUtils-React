import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
  setAlert({ msg: message, type: type });
  setTimeout(() => setAlert(null), 1500);
  
};


  const togglemode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been Enabled", "success");
    document.title = "TextUtils - Dark Mode";
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled", "success");
    document.title = "TextUtils - Light Mode";
  }
};


  return (
    <BrowserRouter>
    <>
      <Navbar title="textUtilies" aboutText="About Text" mode={mode} togglemode={togglemode} />
      <Alert Alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route
            path="/"
            element={<TextForm heading="Enter the text to analyze below" mode={mode} togglemode={togglemode} showAlert={showAlert} />}
          />
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} togglemode={togglemode}/> */}
        </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
