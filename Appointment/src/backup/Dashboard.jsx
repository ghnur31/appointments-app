// import { useState, useEffect } from "react";

// const Dashboard = () => {
//   // State untuk menyimpan data form
//   const [formData, setFormData] = useState({
//     name: "",
//     doctor: "",
//     date: "",
//     time: "",
//   });

//   // State untuk menyimpan data janji temu yang belum selesai
//   const [unfinishedAppointments, setUnfinishedAppointments] = useState(() => {
//     const storedAppointments = sessionStorage.getItem("unfinishedAppointments");
//     return storedAppointments ? JSON.parse(storedAppointments) : [];
//   });

//   // State untuk menyimpan data janji temu yang sudah selesai
//   const [finishedAppointments, setFinishedAppointments] = useState(() => {
//     const storedAppointments = sessionStorage.getItem("finishedAppointments");
//     return storedAppointments ? JSON.parse(storedAppointments) : [];
//   });

//   // Fungsi untuk menyimpan data ke sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem(
//       "unfinishedAppointments",
//       JSON.stringify(unfinishedAppointments)
//     );
//     sessionStorage.setItem(
//       "finishedAppointments",
//       JSON.stringify(finishedAppointments)
//     );
//   }, [unfinishedAppointments, finishedAppointments]);

//   // Fungsi untuk mengupdate nilai form
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Fungsi untuk menangani submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Cek apakah waktu yang dipilih sudah terjadwal pada tanggal yang sama
//     const isTimeConflict = unfinishedAppointments.some(
//       (appointment) =>
//         appointment.date === formData.date && appointment.time === formData.time
//     );

//     // Cek apakah waktu yang dipilih sudah terjadwal pada tanggal yang sama di tabel yang sudah selesai
//     const isFinishedTimeConflict = finishedAppointments.some(
//       (appointment) =>
//         appointment.date === formData.date && appointment.time === formData.time
//     );

//     if (isTimeConflict || isFinishedTimeConflict) {
//       alert("Waktu yang dipilih sudah terjadwal pada tanggal yang sama.");
//       return;
//     }

//     // Buat objek untuk data janji temu baru
//     const newAppointment = {
//       ...formData,
//       id: Date.now(), // Buat ID unik menggunakan timestamp
//     };

//     // Tambahkan data janji temu baru ke tabel yang belum selesai
//     setUnfinishedAppointments([...unfinishedAppointments, newAppointment]);

//     // Reset form
//     setFormData({ name: "", doctor: "", date: "", time: "" });
//   };

//   // Fungsi untuk menyelesaikan data janji temu
//   const handleFinish = (id) => {
//     // Cari data janji temu yang akan diselesaikan
//     const appointmentToFinish = unfinishedAppointments.find(
//       (appointment) => appointment.id === id
//     );
//     // Tambahkan data janji temu ke tabel yang sudah selesai
//     setFinishedAppointments([...finishedAppointments, appointmentToFinish]);
//     // Hapus data janji temu dari tabel yang belum selesai
//     setUnfinishedAppointments(
//       unfinishedAppointments.filter((appointment) => appointment.id !== id)
//     );
//   };

//   // Fungsi untuk menghapus data janji temu yang sudah selesai
//   const handleDeleteFinishedAppointment = (id) => {
//     // Konfirmasi sebelum menghapus
//     if (window.confirm("Apakah Anda yakin ingin menghapus janji temu ini?")) {
//       // Hapus data dari state
//       setFinishedAppointments((prevFinishedAppointments) =>
//         prevFinishedAppointments.filter((appointment) => appointment.id !== id)
//       );
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

//   // Fungsi untuk mengubah format tanggal dari yyyy-mm-dd menjadi dd/mm/yyyy
//   const formatDate = (dateString) => {
//     const [year, month, day] = dateString.split("-");
//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div className="p-8 space-y-8">
//       {/* Form input */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Nama"
//           required
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//         />
//         <input
//           type="text"
//           name="doctor"
//           value={formData.doctor}
//           onChange={handleChange}
//           placeholder="Dokter"
//           required
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           placeholder="Tanggal"
//           required
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//         />
//         <select
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//         >
//           <option value="">Pilih Waktu</option>
//           {generateTimeOptions().map((time) => (
//             <option key={time} value={time}>
//               {time}
//             </option>
//           ))}
//         </select>
//         <button
//           type="submit"
//           className="w-full bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-50"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Tabel janji temu yang belum selesai */}
//       <div className="space-y-4">
//         <h2 className="text-lg font-semibold">Janji Temu Belum Selesai</h2>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Nama</th>
//               <th className="border border-gray-300 px-4 py-2">Dokter</th>
//               <th className="border border-gray-300 px-4 py-2">Tanggal</th>
//               <th className="border border-gray-300 px-4 py-2">Waktu</th>
//               <th className="border border-gray-300 px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {unfinishedAppointments.map((appointment) => (
//               <tr key={appointment.id}>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {appointment.name}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {appointment.doctor}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {formatDate(appointment.date)}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {appointment.time}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() => handleFinish(appointment.id)}
//                     className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
//                   >
//                     Finish
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Tabel janji temu yang sudah selesai */}
//       <div className="space-y-4">
//         <h2 className="text-lg font-semibold">Janji Temu Sudah Selesai</h2>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Nama</th>
//               <th className="border border-gray-300 px-4 py-2">Dokter</th>
//               <th className="border border-gray-300 px-4 py-2">Tanggal</th>
//               <th className="border border-gray-300 px-4 py-2">Waktu</th>
//               <th className="border border-gray-300 px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {finishedAppointments.map((appointment) => (
//               <tr key={appointment.id}>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {appointment.name}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {appointment.doctor}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {formatDate(appointment.date)}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {appointment.time}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() =>
//                       handleDeleteFinishedAppointment(appointment.id)
//                     }
//                     className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
