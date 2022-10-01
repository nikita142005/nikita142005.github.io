import React from 'react';
import NotFoundPage from "./Components/Not-found-page/Not-found-page";
import "./Style/style.css"
import "./Style/normolize.css"

import {Routes, Route,} from "react-router-dom";
import MainPage from "./Components/Main-page/Main-page";


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<MainPage/>}/>
       <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
