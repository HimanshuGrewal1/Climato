import React from 'react'
import Singlepost  from "./Singlepost";

const Feed2 = () => {
  return (
    <section className="flex-1 bg-black w-[60vw]  md:mt-[8vh] ml-[10vw] md:ml-[20vw] p-4">
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-bold">Post Title</h2>
        <p className="text-gray-400">Post content goes here...</p>
      </div>
      <Singlepost/>
    </section>
  )
}

export default Feed2
