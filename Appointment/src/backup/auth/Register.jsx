// import { useContext, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../contects/AuthProvider";

// const Register = () => {
//   const { createUser } = useContext(AuthContext);
//   const [error, setError] = useState("error");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/login";

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const displayName = form.fullName.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     createUser(displayName, email, password)
//       .then(() => {
//         alert("User created successfully!");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.errorMessage;
//         setError(errorCode, errorMessage);
//       });
//   };

//   return (
//     <div className="flex flex-row h-screen">
//       {/* Bagian kiri */}
//       <div className="flex flex-col bg-violet-500 text-white h-full w-full items-center justify-center">
//         <h1 className="text-3xl font-bold">Join Us!</h1>
//         <p className="text-gray-200 mt-2">Create your account.</p>
//       </div>

//       {/* Bagian kanan */}
//       <div className="flex flex-col bg-white h-full w-full items-center justify-center">
//         {/* Form registrasi */}
//         <form className="w-1/2 mx-auto" onSubmit={handleSignUp}>
//           <h1 className="text-2xl font-bold mb-4">Register</h1>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="fullName"
//             >
//               Full Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="fullName"
//               type="text"
//               placeholder="Full Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email Address
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Email Address"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="******************"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between mb-3">
//             <button
//               className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Register
//             </button>
//           </div>
//           <p>
//             you have an account? Login{" "}
//             <Link to="/login">
//               <span className="text-blue-500">here</span>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
