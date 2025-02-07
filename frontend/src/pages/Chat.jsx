// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import { Card, TextInput, Button, ScrollArea } from "@mantine/core";

// const socket = io("http://localhost:5000"); // Change this to your backend URL

// export default function ChatApp() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });
//     return () => socket.off("message");
//   }, []);

//   const sendMessage = () => {
//     if (input.trim()) {
//       socket.emit("message", input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
//       <Card shadow="sm" padding="lg" radius="md" withBorder className="w-full max-w-md">
//         <ScrollArea style={{ height: 320 }}>
//           {messages.map((msg, index) => (
//             <div key={index} className="p-2 my-1 bg-blue-100 rounded-lg">
//               {msg}
//             </div>
//           ))}
//         </ScrollArea>
//         <div className="flex gap-2 mt-4">
//           <TextInput
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-grow"
//           />
//           <Button onClick={sendMessage} color="blue">
//             Send
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }


import { useState } from "react";
import  Input  from "../components/ui/input";
import {Button} from "../components/ui/Button";
import Card from "../components/ui/card";

import { Search, Phone, Video, Image, File, Link, BellOff } from "lucide-react";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Ava", text: "You got this! Don't forget to bring a", time: "10:00 PM" },
    { id: 2, sender: "You", text: "Did you know that taking public transportation reduces your carbon footprint?", time: "9:11 PM", outgoing: true },
    { id: 3, sender: "You", text: "I'm here. Where are", time: "10:00 PM", outgoing: true },
    { id: 4, sender: "You", text: "You are", time: "10:00 PM", outgoing: true },
  ]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold">Chats</h2>
        <Input placeholder="Search for a chat" className="mt-2" />
        <div className="mt-4 space-y-2">
          <div className="p-2 bg-gray-200 rounded cursor-pointer">Eco Tip: Use reusable bags</div>
          <div className="p-2 bg-gray-300 rounded cursor-pointer font-bold">Ava Thompson</div>
          <div className="p-2 bg-gray-200 rounded cursor-pointer">Pablo Morandi</div>
        </div>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Ava Thompson</h2>
          <div className="flex space-x-2">
            <Button variant="outline"><Search /></Button>
            <Button variant="outline"><Phone /></Button>
            <Button variant="outline"><Video /></Button>
          </div>
        </header>

        <div className="flex-1 p-4 overflow-auto bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.outgoing ? "justify-end" : "justify-start"} mb-2`}>
              <div className={`p-2 rounded-lg ${msg.outgoing ? "bg-green-200" : "bg-gray-300"}`}>{msg.text}</div>
            </div>
          ))}
        </div>

        <footer className="flex items-center p-4 border-t">
          <Button variant="outline"><Image /></Button>
          <Input className="flex-1 mx-2" placeholder="Type your message here..." />
          <Button variant="outline">Send</Button>
        </footer>
      </main>

      {/* Chat Details */}
      <aside className="w-1/4 bg-gray-100 p-4 border-l">
        <h2 className="text-lg font-semibold">Chat details</h2>
        <div className="flex space-x-2 mt-2">
          <Button variant="outline"><Image /></Button>
          <Button variant="outline"><File /></Button>
          <Button variant="outline"><Link /></Button>
          <Button variant="outline"><BellOff /></Button>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Eco-friendly files</h3>
          <ul className="mt-2 space-y-1">
            <li className="bg-white p-2 rounded shadow">Sustainability.pdf (1MB)</li>
            <li className="bg-white p-2 rounded shadow">Green (10kB)</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ChatApp;
