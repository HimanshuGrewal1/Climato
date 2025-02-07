

import { Outlet } from 'react-router-dom'
import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>   <Outlet/></MantineProvider>;
}


// function App() {
//   return (
  
   
     
//   );
// }

// export default App;

// import { Outlet } from 'react-router-dom'
// import './App.css'

// function App() {
  

//   return (
//     <>
//     <Navbar/>
//     <main className='min-h-screen max-w-screen-2xl mx-auto px-4  font-primary' >
//       <Outlet/>
//       </main>
//       <Footer/>

//     </>
//   )
// }

// export default App

