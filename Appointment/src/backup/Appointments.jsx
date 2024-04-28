import { useState } from "react";

const Appointments = () => {
  // Data janji temu dummy
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "W5iFP@example.com",
      phone: "1234567890",
      doctor: "Dr. Jane Smith",
      appointmentTime: "09:00 AM",
      dateBeforeAppointment: "20 April 2024",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "9876543210",
      doctor: "Dr. John Doe",
      appointmentTime: "09:30 AM",
      dateBeforeAppointment: "20 April 2024",
      status: "Pending",
    },
    // Tambahkan data janji temu lainnya di sini
  ]);

  // Filter janji temu yang sudah selesai
  const finishedAppointments = appointments.filter(
    (appointment) => appointment.status === "Finished"
  );

  // Fungsi untuk menyelesaikan janji temu
  const handleFinishAppointment = (id) => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === id ? { ...appointment, status: "Finished" } : appointment
    );
    setAppointments(updatedAppointments);
  };

  // Menghapus janji temu yang sudah selesai dari tabel pertama
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending"
  );

  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-2">Appointments List</h1>
        <p className="text-gray-400 mb-6">
          Dashboard / <span className="text-violet-500">Appointments</span>
        </p>
      </div>
      {/* Tabel janji temu yang belum selesai */}
      <div className="bg-white p-5 rounded-lg mb-8">
        <table className="table-fixed w-full rounded-lg">
          <thead>
            <tr>
              <th className="w-1/12 w- p-3 text-start">No.</th>
              <th className="w-1/6 p-3 text-start">Name</th>
              <th className="w-1/6 p-3 text-start">Doctor</th>
              <th className="w-1/6 p-3 text-start">Date</th>
              <th className="w-1/6 p-3 text-start">Appointment Time</th>
              <th className="w-1/6 p-3 text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingAppointments.map((appointment, index) => (
              <tr
                key={appointment.id}
                className={index % 2 === 0 ? "bg-violet-100" : "bg-white"}
              >
                <td className="p-3">{appointment.id}</td>
                <td className="p-3">{appointment.name}</td>
                <td className="p-3">{appointment.doctor}</td>
                <td className="p-3">{appointment.dateBeforeAppointment}</td>
                <td className="p-3">{appointment.appointmentTime}</td>
                <td className="flex flex-row p-3 gap-2">
                  <button
                    className="text-white bg-violet-500 hover:bg--600 py-1 px-2 rounded-lg transition-colors duration-300"
                    onClick={() => handleFinishAppointment(appointment.id)}
                  >
                    Finish
                  </button>
                  <button className="text-white bg-violet-500 hover:bg-violet-600 py-1 px-2 rounded-lg transition-colors duration-300">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Tabel janji temu yang sudah selesai */}
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Finished Appointments</h2>
        <table className="table-fixed w-full rounded-lg">
          <thead>
            <tr>
              <th className="w-1/12 p-3 text-start">No.</th>
              <th className="w-1/6 p-3 text-start">Name</th>
              <th className="w-1/6 p-3 text-start">Doctor</th>
              <th className="w-1/6 p-3 text-start">Date</th>
              <th className="w-1/3 p-3 text-start">Appointment Time</th>
            </tr>
          </thead>
          <tbody>
            {finishedAppointments.map((appointment, index) => (
              <tr
                key={appointment.id}
                className={index % 2 === 0 ? "bg-violet-100" : "bg-white"}
              >
                <td className="p-3">{appointment.id}</td>
                <td className="p-3">{appointment.name}</td>
                <td className="p-3">{appointment.doctor}</td>
                <td className="p-3">{appointment.dateBeforeAppointment}</td>
                <td className="p-3">{appointment.appointmentTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
