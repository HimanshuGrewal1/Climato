import React from "react";

const RightSidebar = () => {
  return (
    
    <div className="hidden md:block">
    <aside className="w-[20vw] bg-[#181C1Fff]  p-4">
      <h3 className="text-lg font-bold">Popular Communities</h3>
      <ul>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">r/explainlikeimfive</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">r/technology</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">r/movies</li>
      </ul>
    </aside>
    </div>
  );
};

export default RightSidebar;
