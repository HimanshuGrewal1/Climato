import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
import Singlepost from "../components/Singlepost"
import Feed2 from '../components/Feed2';

const Singlepostpage = () => {
  return (
    <>
        <div className="m-0 p-0">
        
          <div className="bg-black text-white min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex flex-1">
              <Sidebar />
              {console.log("esnsdnd")}
            <Feed2/>
             <RightSidebar/>
            </div>
          </div>
          </div>
        </>
  )
}

export default Singlepostpage
