// import React from 'react'
// import { Button } from '../components/ui/Button'
// import { useState } from 'react';

// const KK = () => {
//        const [joined, setJoined] = useState(false);
//   return (
//     <div>
//       himanshu
//       <button className=''>login</button>
//       <button>Resgister </button>
//       <Button
//                               className={`px-4 py-1 text-sm ${joined ? "bg-gray-600" : "bg-blue-600"
//                                   }`}
//                               onClick={() => setJoined(!joined)}
//                           >
//                               {joined ? "Joined" : "Join"}
//                           </Button>
//     </div>
//   )
// }

// export default KK

// import React, { useState } from "react";
// import { Link } from 'react-router-dom'

// const LoginPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* Button to Show Popup */}
//       <button
//         onClick={() => setShowPopup(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
//       >
//         Open Login
//       </button>

//       {/* Popup Modal */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-semibold mb-4">Login</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full px-3 py-2 border rounded mb-3"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-3 py-2 border rounded mb-3"
//             />
//             <Link to="/home">
//             <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
               
//             >
//                  Login
             
//             </button>
//             </Link>
//             {/* Close Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPopup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, TextInput, PasswordInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FaGoogle } from 'react-icons/fa'

const LoginPopup = () => {
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = (values) => {
    console.log("Login Data:", values);
    setOpened(false); // Close modal on submit
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Button to open popup */}
      <Button onClick={() => setOpened(true)}>Open Login</Button>

      {/* Mantine Modal for Login */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Login"
        centered
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...form.getInputProps("email")}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            {...form.getInputProps("password")}
            mt="md"
            required
          />
          <Link to="/home">
            <Button type="submit" fullWidth mt="xl">
              Login
            </Button>
          </Link>
        </form>
        <p className='align-baseline font-medium mt-4 text-sm ml-6'>Haven't an account? please Resgister
          <Link to="/Register" className='p-3 text-blue-500 hover:text-blue-700'>Register</Link></p>
        <div className="mt-4">
          <button
            className=" w-[90%] ml-[5%] flex bg-blue-500 flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs mb-11">
          &copy;2025 Book Store. All rights reserved.
        </p>
      </Modal>
    </div>
  );
};

export default LoginPopup;
