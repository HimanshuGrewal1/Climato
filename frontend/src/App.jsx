import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
         <Feed/>
         <RightSidebar/>
        </div>
      </div>
    </Router>
  );
}

export default App;


