// import React, { useState, useEffect } from "react";
// import PostItem from './PostItem';

// function PostList() {

//     const [posts, setposts] = useState([]); 
  
//   const gg = async()=>{

//     try {
//      const res = await fetch(`/feed.json`)
//       const data = await res.json()
//       setposts(data)
   
//     ;
//     } catch (error) {
   
//     }
//  }
 
//    useEffect(() => {
//          gg();
//    }, []);
   

//   const handleVote = (id, delta) => {
//     setposts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === id ? { ...post, votes: post.votes + delta } : post
//       )
//     );
//   };

//   return (
//     <div className="space-y-4 bg-[#181C1Fff] ">
//       {posts.map((post) => (
//         <PostItem key={post.id} post={post} onVote={handleVote} />
//       ))}
//     </div>
//   );
// }

// export default PostList;

import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/feed.json");
      if (!res.ok) throw new Error("Failed to fetch posts");
      
      const data = await res.json();
      setPosts(data.map(post => ({ ...post, votes: post.votes || 0 }))); // Ensure votes exist
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleVote = (id, delta) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, votes: (post.votes || 0) + delta } : post
      )
    );
  };

  return (
    <div className="space-y-4 bg-black">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostItem key={post.id} post={post} onVote={handleVote} />
        ))
      ) : (
        <p className="text-white text-center">Loading posts...</p>
      )}
    </div>
  );
}

export default PostList;
