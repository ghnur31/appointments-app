// import { useState, useContext } from "react";
// import { BsCaretDown } from "react-icons/bs";
// import { AuthContext } from "../contects/AuthProvider";
// import { useNavigate, useLocation } from "react-router-dom";
// import iconProfil from "../assets/icon_user.png";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/login";

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         alert("You has been logged out");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };
//   return (
//     <nav className="flex flex-row items-center justify-between bg-violet-500 p-4">
//       <div className="text-white font-bold text-xl">Logo</div>
//       <div className="flex flex-row gap-4 items-center">
//         <ul className="flex flex-row gap-4">
//           <li>
//             <a href="#" className="text-white hover:text-gray-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white hover:text-gray-300">
//               Doctor`s
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white hover:text-gray-300">
//               Facilities
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white hover:text-gray-300">
//               Gallery
//             </a>
//           </li>
//         </ul>
//         {/* profile */}
//         <div className="flex flex-row gap-4 items-center">
//           <div className="relative">
//             <img
//               src={user?.photoURL ? user.photoURL : iconProfil}
//               alt="Profile"
//               className="w-12 h-12 rounded-full cursor-pointer"
//               onClick={toggleDropdown}
//             />
//           </div>
//           <div
//             className="flex flex-col cursor-pointer"
//             onClick={toggleDropdown}
//           >
//             {user ? user.displayName : ""}
//             {/* title */}
//             {/* <p className="text-sm font-light">Admin</p> */}
//           </div>
//           {/* dropdown */}
//           <div className="relative">
//             <BsCaretDown
//               className=" text-white cursor-pointer"
//               onClick={toggleDropdown}
//             />
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
//                 <ul className="py-1">
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Profile
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/login"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={handleLogout}
//                     >
//                       Logout
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
