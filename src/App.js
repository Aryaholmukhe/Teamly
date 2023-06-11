import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import React from "react"
import ReactDOM from "react-dom/client";
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form.js"
import ResultPage from "./components/DisplayAnswers.js"
import Participants from "./components/participants.js"

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/community" element={<Participants />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
