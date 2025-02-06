import React from 'react'
import { useState } from "react";
import { Button } from "./ui/Button";
import { Clock, MoreHorizontal } from "lucide-react";
import postImage from "../assets/post1.png";
import { ArrowUp, ArrowDown, MessageCircle, Gift, Share2 } from "lucide-react";




const PostItem = () => {
    const [joined, setJoined] = useState(false);
    const [votes, setVotes] = useState(3300);
    const [voted, setVoted] = useState(null); // null, "up", or "down"

    const handleVote = (type) => {
        if (voted === type) {
            setVotes(type === "up" ? votes - 1 : votes + 1);
            setVoted(null);
        } else {
            setVotes(type === "up" ? votes + 1 : votes - 1);
            setVoted(type);
        }
    };
    return (
        <div className='bg-black w-full md:w-[50vw] md:mx-auto hover:bg-slate-900 rounded-lg p-5'>
          
            <div className="flex items-center justify-between   p-3 rounded-lg  ">
                <div className="flex items-center space-x-3">
                    <img
                        src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                        alt="Subreddit"
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold">r/india</p>
                        <p className="text-xs text-gray-400 flex items-center">
                            <Clock size={12} className="mr-1" /> 3 hr. ago
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        className={`px-4 py-1 text-sm ${joined ? "bg-gray-600" : "bg-blue-600"
                            }`}
                        onClick={() => setJoined(!joined)}
                    >
                        {joined ? "Joined" : "Join"}
                    </Button>
                    <MoreHorizontal className="text-gray-400 cursor-pointer" />
                </div>
            </div>
            <img src={postImage} alt="Post Image" />
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2  text-white p-2 rounded-lg w-full ">
      {/* Upvote/Downvote */}
      <div className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full">
        <ArrowUp
          size={18}
          className={`cursor-pointer ${
            voted === "up" ? "text-orange-500" : "text-gray-400"
          }`}
          onClick={() => handleVote("up")}
        />
        <span className="text-sm">{votes.toLocaleString()}</span>
        <ArrowDown
          size={18}
          className={`cursor-pointer ${
            voted === "down" ? "text-blue-500" : "text-gray-400"
          }`}
          onClick={() => handleVote("down")}
        />
      </div>

      {/* Comments */}
      <div className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full">
        <MessageCircle size={18} className="text-gray-400" />
        <span className="text-sm">318</span>
      </div>

      {/* Awards */}
      <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
        <Gift size={18} className="text-gray-400" />
      </div>

      {/* Share */}
      <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
        <Share2 size={18} className="text-gray-400" />
        <span className="text-sm ml-1">Share</span>
      </div>
    </div>
    <div className='w-full h-[1px] bg-white'></div>
        </div>
    )
}

export default PostItem
