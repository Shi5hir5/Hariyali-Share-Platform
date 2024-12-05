import Hariyali from "./Components/Hariyali";
import MainArea from "./Components/MainArea";
import Application from "./Components/Application";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<MainArea />}>
      </Route>
      <Route path="/applications" element={<Application/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
