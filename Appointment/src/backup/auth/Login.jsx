// import { useContext, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../contects/AuthProvider";
// import googleLogo from "../assets/google-logo.svg";

// const Login = () => {
//   const { login, loginWithGoogle } = useContext(AuthContext);
//   const [error, setError] = useState(""); // Variabel untuk menyimpan pesan kesalahan

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       if (email === "admin@gmail.com") {
//         await login(email, password);
//         alert("Login Successfully");
//         navigate("/", { replace: true }); // Arahkan ke halaman admin jika login sebagai admin
//       } else {
//         // Lanjutkan proses login untuk email selain admin
//         await login(email, password);
//         alert("Login Successfully");
//         navigate("/user", { replace: true }); // Arahkan ke halaman user jika login sebagai user biasa
//       }
//     } catch (error) {
//       // Menangani kesalahan saat login
//       setError("Email or password is incorrect"); // Menetapkan pesan kesalahan
//     }
//   };

//   const handleRegister = () => {
//     loginWithGoogle()
//       .then(() => {
//         alert("Login Successfully");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         console.error("Error logging in with Google:", error);
//       });
//   };

//   return (
//     <div className="flex flex-row h-screen">
//       {/* Bagian kiri */}
//       <div className="flex flex-col bg-violet-500 text-white h-full w-full items-center justify-center">
//         <h1 className="text-3xl font-bold">Welcome Back!</h1>
//         <p className="text-gray-200 mt-2">Please login to your account.</p>
//       </div>

//       {/* Bagian kanan */}
//       <div className="flex flex-col bg-white h-full w-full items-center justify-center">
//         {/* Form login */}
//         <form className="w-1/2 mx-auto" onSubmit={handleLogin}>
//           <h1 className="text-2xl font-bold mb-4">Login</h1>
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
//           <div className="mb-0">
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

//           {/* MENAMPILKAN PESAN ERROR */}
//           {error && <p className="text-red-500">{error}</p>}

//           <div className="flex items-center justify-between my-3">
//             <button
//               className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Login
//             </button>
//           </div>
//           <p>
//             dont have an account? sign up{" "}
//             <Link to="/register">
//               <span className="text-blue-500">here</span>
//             </Link>
//           </p>

//           <hr />
//         </form>
//         <div className="flex w-full items-center flex-col mt-3 gap-3">
//           <button onClick={handleRegister} className="block">
//             <img src={googleLogo} alt="" className="w-12 h-12 inline-block " />
//             Login With Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
