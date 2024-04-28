// import { useState, useContext } from "react";
// import { AuthContext } from "../../contects/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/Navbar";

// const User = () => {
//   // Data dummy untuk card
//   const dummyDoctors = [
//     {
//       id: 1,
//       name: "Dr. John Doe",
//       specialty: "Cardiologist",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       name: "Dr. Jane Smith",
//       specialty: "Dermatologist",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   // State untuk mengontrol tampilan popup
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [appointmentData, setAppointmentData] = useState({
//     patientName: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     doctorName: "",
//     status: "pending",
//   });

//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Cek apakah pengguna telah login, jika tidak, alihkan ke halaman login
//   if (!user) {
//     navigate("/login");
//     return null; // Return null agar komponen tidak dirender sebelum navigasi selesai
//   }

//   // Fungsi untuk menampilkan popup dan mengatur dokter yang dipilih
//   const handleCardClick = (doctor) => {
//     setShowPopup(true);
//     setSelectedDoctor(doctor);
//     // Set state untuk menyimpan nama dokter yang dipilih
//     setAppointmentData({
//       ...appointmentData,
//       doctorName: doctor.name,
//     });
//   };

//   // Fungsi untuk menutup popup
//   const handleClosePopup = () => {
//     setShowPopup(false);
//     setSelectedDoctor(null);
//     // Reset data appointment dan dokter yang dipilih
//     setAppointmentData({
//       patientName: "",
//       email: "",
//       phone: "",
//       date: "",
//       time: "",
//       doctorName: "",
//       status: "",
//     });
//   };

//   // Fungsi untuk mengatur perubahan pada input form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentData({
//       ...appointmentData,
//       [name]: value,
//     });
//   };

//   // Fungsi untuk menangani submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/upload-queue", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(appointmentData), // Kirim data appointment
//       });
//       if (response.ok) {
//         // Berhasil
//         console.log("Appointment submitted successfully!");
//         // Tutup popup setelah pengiriman berhasil
//         handleClosePopup();
//       } else {
//         // Gagal
//         console.error("Failed to submit appointment");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // Membuat array pilihan waktu dari jam 8 hingga jam 15 dengan interval 30 menit
//   const generateTimeOptions = () => {
//     const timeOptions = [];
//     for (let hour = 8; hour <= 15; hour++) {
//       timeOptions.push(`${String(hour).padStart(2, "0")}:00`);
//       timeOptions.push(`${String(hour).padStart(2, "0")}:30`);
//     }
//     return timeOptions;
//   };

//   return (
//     <div className="flex flex-col">
//       {/* navbar */}
//       <Navbar />
//       {/* main content */}
//       <div className="grid grid-cols-3 gap-4 p-4">
//         {dummyDoctors.map((doctor) => (
//           <div
//             key={doctor.id}
//             className="bg-violet-100 rounded-lg shadow-md p-4 cursor-pointer"
//             onClick={() => handleCardClick(doctor)}
//           >
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <div className="text-lg font-semibold">{doctor.name}</div>
//             <div className="text-gray-500">{doctor.specialty}</div>
//           </div>
//         ))}
//       </div>

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">
//               Appointment with {selectedDoctor?.name}
//             </h2>
//             <form onSubmit={handleSubmit}>
//               {/* Input data appointment */}
//               <div className="mb-4">
//                 <label
//                   htmlFor="patientName"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Patient Name
//                 </label>
//                 <input
//                   type="text"
//                   id="patientName"
//                   name="patientName"
//                   value={appointmentData.patientName}
//                   onChange={handleInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Patient Name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={appointmentData.email}
//                   onChange={handleInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Email Address"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="phone"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={appointmentData.phone}
//                   onChange={handleInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Phone Number"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="date"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   id="date"
//                   name="date"
//                   value={appointmentData.date}
//                   onChange={handleInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="date"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Time
//                 </label>
//                 <select
//                   name="time"
//                   value={appointmentData.time}
//                   onChange={handleInputChange}
//                   required
//                   className="block w-full border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//                 >
//                   <option value="">Pilih Waktu</option>
//                   {generateTimeOptions().map((time) => (
//                     <option key={time} value={time}>
//                       {time}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Tambahkan input untuk data dokter */}
//               <input
//                 type="hidden"
//                 name="doctorName"
//                 value={appointmentData.doctorName}
//                 readOnly
//               />
//               {/* Tambahkan input untuk status appointment */}
//               <input type="hidden" name="status" value="pending" readOnly />
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-violet-500 text-white font-semibold py-2 px-4 rounded-lg"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleClosePopup}
//                   className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg ml-4"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default User;
