import { useState, FC } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ReasonType = {
  id: number;
  name: string;
};

const appointmentTypes: ReasonType[] = [
  { id: 1, name: "General Checkup" },
  { id: 2, name: "Vaccination" },
  { id: 3, name: "Skin Disorder" },
  { id: 4, name: "Respiratory Issues" },
  { id: 5, name: "Mental Health" },
];

interface AppointmentReasonProps {
  reason: ReasonType;
}

interface SelectedReasonProps {
  reason: ReasonType;
  removeReason: (id: number) => void;
}

const AppointmentReason: FC<AppointmentReasonProps> = ({ reason }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "REASON",
    item: { id: reason.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-gray-700 text-white rounded-lg mb-2 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {reason.name}
    </div>
  );
};

const SelectedReason: FC<SelectedReasonProps> = ({ reason, removeReason }) => (
  <div
    className="p-2 bg-gray-500 text-white rounded-lg mb-2 cursor-pointer"
    onClick={() => removeReason(reason.id)}
  >
    {reason.name}
  </div>
);

const AddAppointment: FC = () => {
  const [selectedReasons, setSelectedReasons] = useState<ReasonType[]>([]);
  const navigate = useNavigate();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "REASON",
    drop: (item: ReasonType) => addReason(item.id),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addReason = (id: number) => {
    const reason = appointmentTypes.find((item) => item.id === id);
    if (reason && !selectedReasons.includes(reason)) {
      setSelectedReasons((prev) => [...prev, reason]);
    }
  };

  const removeReason = (id: number) => {
    setSelectedReasons((prev) => prev.filter((reason) => reason.id !== id));
  };

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/register")
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-900 flex">
        <div className="w-1/4 bg-gray-800 p-6 space-y-4">
          <h1 className="text-2xl font-bold text-white">HealthMate</h1>
          <button className="w-full bg-red-600 hover:bg-red-500 text-white p-2 rounded-lg mt-6" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>

        <div className="flex-1 p-8 space-y-8">
          <h2 className="text-2xl font-bold text-white">Add Appointment</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg text-white mb-2">Appointment Date</h3>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
                <FaCalendarAlt className="absolute right-4 top-3 text-gray-400" />
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg text-white mb-2">Select Gender</h3>
              <select className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg text-white mb-2">Select Reason for Appointment</h3>
            <div className="flex">
              <div className="w-1/2 p-4 bg-gray-900 rounded-lg mr-2">
                {appointmentTypes.map((reason) => (
                  <AppointmentReason key={reason.id} reason={reason} />
                ))}
              </div>
              <div
                ref={drop}
                className={`w-1/2 p-4 bg-gray-700 rounded-lg ${
                  isOver ? "bg-gray-600" : ""
                }`}
              >
                {selectedReasons.map((reason) => (
                  <SelectedReason
                    key={reason.id}
                    reason={reason}
                    removeReason={removeReason}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg text-white mb-2">Select Time</h3>
            <div className="flex space-x-2">
              <select className="w-1/3 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none">
                {[...Array(12).keys()].map((hour) => (
                  <option key={hour}>{hour + 1}</option>
                ))}
              </select>
              <select className="w-1/3 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none">
                {[0, 15, 30, 45].map((minute) => (
                  <option key={minute}>{minute.toString().padStart(2, "0")}</option>
                ))}
              </select>
              <select className="w-1/3 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default AddAppointment;