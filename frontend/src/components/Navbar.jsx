import { Search, MoreHorizontal } from "lucide-react";


export default function RedditNavbar() {
  return (
    <div className="md:fixed">
    <div className="flex items-center bg-black p-2 px-4">
      {/* Reddit Logo */}
      <div className="flex items-center text-white font-bold text-lg">
        <span className="text-orange-500 text-2xl mr-1">●</span>reddit
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 px-4 py-1  rounded-full ml-4 md:ml-[20vw] w-96">
        <Search className="text-gray-400 " size={16} />
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-transparent text-gray-400 outline-none ml-2 w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center ml-auto space-x-2">
      <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm">
  Get App
</button>
<button className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
  Log In
</button>

        <MoreHorizontal className="text-white" size={20} />
      </div>
    </div>
     <div className="w-[100vw] h-[1px] bg-slate-500"></div>
    </div>
  );
}
