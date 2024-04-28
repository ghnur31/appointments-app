import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [finishedAppointments, setFinishedAppointments] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedFinishedAppointments =
      JSON.parse(localStorage.getItem("finishedAppointments")) || [];
    setFinishedAppointments(storedFinishedAppointments);
    // Ambil data janji temu dari backend
    fetch("http://localhost:5000/all-queue")
      .then((response) => response.json())
      .then((data) => {
        // Pisahkan data yang belum selesai dan sudah selesai
        const unfinished = data.filter((appointment) => !appointment.finished);
        const finished = data.filter((appointment) => appointment.finished);

        // Setel data janji temu yang belum selesai ke state
        setAppointments(unfinished);

        // Setel data janji temu yang sudah selesai ke state
        setFinishedAppointments(finished);
      })
      .catch((error) => {
        console.error("Failed to fetch appointments:", error);
      });
  }, []); // Gunakan array kosong sebagai dependency agar useEffect hanya berjalan sekali setelah render pertama

  // Fungsi untuk menangani penekanan tombol "Finish" untuk menyelesaikan janji temu
  const handleFinishAppointment = (index) => {
    const appointmentToFinish = appointments[index];

    // Pindahkan janji temu ke tabel yang sudah selesai
    setFinishedAppointments((prevFinishedAppointments) => [
      ...prevFinishedAppointments,
      { ...appointmentToFinish, finished: true },
    ]);

    // Hapus janji temu dari tabel yang belum selesai
    setAppointments((prevAppointments) =>
      prevAppointments.filter((_, i) => i !== index)
    );
  };

  // Fungsi untuk menghapus janji temu yang sudah selesai
  const handleDeleteFinishedAppointment = (id) => {
    // Hapus data dari state
    setFinishedAppointments((prevFinishedAppointments) =>
      prevFinishedAppointments.filter((appointment) => appointment._id !== id)
    );
    // Kirim permintaan ke backend untuk menghapus data dari database
    fetch(`http://localhost:5000/queue/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Appointment deleted successfully:", data);
      })
      .catch((error) => {
        console.error("Failed to delete appointment:", error);
      });
  };

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
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{appointment.patientName}</td>
                <td className="p-3">{appointment.doctorName}</td>
                <td className="p-3">{appointment.date}</td>
                <td className="p-3">{appointment.time}</td>{" "}
                {/* Tampilkan waktu yang diterima dari backend */}
                <td className="flex flex-row p-3 gap-2">
                  <button
                    onClick={() => handleFinishAppointment(index)}
                    className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Finish
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
              <th className="w-1/6 p-3 text-start">Time</th>
              <th className="w-1/6 p-3 text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {finishedAppointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{appointment.patientName}</td>
                <td className="p-3">{appointment.doctorName}</td>
                <td className="p-3">{appointment.date}</td>
                <td className="p-3">{appointment.time}</td>{" "}
                {/* Tampilkan waktu yang diterima dari backend */}
                <td className="flex flex-row p-3 gap-2">
                  <button
                    onClick={() =>
                      handleDeleteFinishedAppointment(appointment.id)
                    }
                    className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
