// import { Card } from "./ui/Card";


// import { Button } from "./ui/Button";




// import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

// export default function NewsCard() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-black p-4">
//       <Card className="w-[700px] bg-[#0F0F0F] text-white p-6 rounded-lg relative">
//         <h2 className="text-lg font-bold text-blue-500">r/IndiaSpeaks 🦁 • 10 hr. ago</h2>
//         <p className="text-xl font-semibold text-blue-400 mt-1">
//           No income tax payable up to income of 12 Lakhs!!!
//         </p>
//         <div className="bg-black mt-4 p-6 rounded-lg relative">
//           <p className="text-sm text-red-500 font-bold">#BudgetWith <span className="bg-red-500 text-white px-2">TOI</span></p>
//           <h3 className="bg-red-600 text-white px-3 py-1 text-lg font-bold inline-block mt-3 rounded">BREAKING NEWS</h3>
//           <p className="text-2xl font-bold mt-3">
//             No income tax payable up to the income of <span className="text-white font-extrabold">Rs 12 lakh</span>, announces FM Nirmala Sitharaman
//           </p>
//         </div>
//         <div className="flex items-center justify-between mt-4 text-gray-400">
//           <Button variant="ghost" className="flex items-center space-x-1">
//             <ThumbsUp size={20} />
//             <span>2.9K</span>
//           </Button>
//           <Button variant="ghost" className="flex items-center space-x-1">
//             <MessageCircle size={20} />
//             <span>394</span>
//           </Button>
//           <Button variant="ghost" className="flex items-center space-x-1">
//             <Share2 size={20} />
//             <span>Share</span>
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }


// import { Card } from "./ui/Card";
// import { Button } from "./ui/Button";
// import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

// const posts = [
//   {
//     id: 1,
//     subreddit: "r/IndiaSpeaks",
//     timeAgo: "10 hr. ago",
//     title: "No income tax payable up to income of 12 Lakhs!!!",
//     tag: "#BudgetWith",
//     source: "TOI",
//     breakingNews: "BREAKING NEWS",
//     content:
//       "No income tax payable up to the income of Rs 12 lakh, announces FM Nirmala Sitharaman",
//     likes: 2900,
//     comments: 394,
//   },
//   {
//     id: 2,
//     subreddit: "r/WorldNews",
//     timeAgo: "5 hr. ago",
//     title: "Major breakthrough in AI research!",
//     tag: "#TechNews",
//     source: "BBC",
//     breakingNews: "LATEST UPDATE",
//     content:
//       "Researchers have developed a new AI model that outperforms previous versions in complex problem-solving.",
//     likes: 4500,
//     comments: 512,
//   },
// ];

// export default function NewsFeed({post}) {
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-black p-4 space-y-6">
      
//         <Card
//           key={post.id}
//           className="w-[700px] bg-[#0F0F0F] text-white p-6 rounded-lg relative"
//         >
//           <h2 className="text-lg font-bold text-blue-500">
//             {post.subreddit} 🦁 • {post.timeAgo}
//           </h2>
//           <p className="text-xl font-semibold text-blue-400 mt-1">{post.title}</p>
//           <div className="bg-black mt-4 p-6 rounded-lg relative">
//             <p className="text-sm text-red-500 font-bold">
//               {post.tag} <span className="bg-red-500 text-white px-2">{post.source}</span>
//             </p>
//             <h3 className="bg-red-600 text-white px-3 py-1 text-lg font-bold inline-block mt-3 rounded">
//               {post.breakingNews}
//             </h3>
//             <p className="text-2xl font-bold mt-3">{post.content}</p>
//           </div>
//           <div className="flex items-center justify-between mt-4 text-gray-400">
//             <Button variant="ghost" className="flex items-center space-x-1">
//               <ThumbsUp size={20} />
//               <span>{post.likes}</span>
//             </Button>
//             <Button variant="ghost" className="flex items-center space-x-1">
//               <MessageCircle size={20} />
//               <span>{post.comments}</span>
//             </Button>
//             <Button variant="ghost" className="flex items-center space-x-1">
//               <Share2 size={20} />
//               <span>Share</span>
//             </Button>
//           </div>
//         </Card>
      
//     </div>
//   );
// }

import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

// export function Card({ children, className, ...props }) {
//   return (
//     <div className={`border rounded-lg p-4 bg-white shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ${className}`} {...props}>
//       {children}
//     </div>
//   );
// }

export default function NewsFeed({ post }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-4 space-y-6">
      <Card
        key={post.id}
        className="w-full max-w-[700px] bg-[#0F0F0F] text-white p-6 rounded-lg relative"
      >
        <h2 className="text-lg font-bold text-blue-500">
          {post.subreddit} 🦁 • {post.timeAgo}
        </h2>
        <p className="text-xl font-semibold text-blue-400 mt-1">{post.title}</p>
        <div className="bg-black mt-4 p-6 rounded-lg relative">
          <p className="text-sm text-red-500 font-bold">
            {post.tag} <span className="bg-red-500 text-white px-2">{post.source}</span>
          </p>
          <h3 className="bg-red-600 text-white px-3 py-1 text-lg font-bold inline-block mt-3 rounded">
            {post.breakingNews}
          </h3>
          <p className="text-xl sm:text-2xl font-bold mt-3">{post.content}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between mt-4 text-gray-400 gap-2">
          <Button variant="ghost" className="flex items-center space-x-1">
            <ThumbsUp size={20} />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-1">
            <MessageCircle size={20} />
            <span>{post.comments}</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-1">
            <Share2 size={20} />
            <span>Share</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
