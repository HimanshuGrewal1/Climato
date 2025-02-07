import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";


const Home = () => {
    
    return (
        <>
        <div className="m-0 p-0">
        
          <div className="bg-black text-white min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              {console.log("esnsdnd")}
             <Feed/>
             <RightSidebar/>
            </div>
          </div>
          </div>
        </>
      );
  }
  
  export default Home