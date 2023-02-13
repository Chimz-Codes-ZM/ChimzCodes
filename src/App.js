import React from "react";
import "./style.css";

import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import AnimatedRoutes from "./Components/AnimatedRoutes"



export default function App() {
  return (
    <Router>

    <header>
    <Navbar />
    </header>
    <div>
    
      <AnimatedRoutes />
    </div>
    </Router>
  );
}
