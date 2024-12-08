// import React from 'react'
// import { useState } from 'react';



// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="flex justify-center w-8 h-8 bg-gray-200 rounded-full md:hidden"
//         onClick={handleToggle}
//       >
//         <svg
//           xmlns="(link unavailable)"
//           className="w-6 h-6"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L10 11.586V8a6 6 0 00-6-6z" />
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md">
//           <ul>
//             <li>
//               <a href="#" className="block py-2 pl-4 text-gray-700">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-4 text-gray-700">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-4 text-gray-700">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
 
// }
// export default HamburgerMenu;
