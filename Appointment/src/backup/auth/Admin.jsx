// import { useContext } from "react";
// import { AuthContext } from "../contects/AuthProvider";
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const Admin = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Cek apakah pengguna telah login, jika tidak, alihkan ke halaman login
//   if (!user) {
//     navigate("/login");
//     return null; // Return null agar komponen tidak dirender sebelum navigasi selesai
//   }
  

//   return (
//     <div className="flex flex-row w-full h-screen bg-slate-200">
//       {/* Sidebar */}
//       <div className="relative top-0 left-0">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col w-full h-full overflow-y-auto">
//         {/* Header */}
//         <Header />
//         {/* Main Content */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Admin;
