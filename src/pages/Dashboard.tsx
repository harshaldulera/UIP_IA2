import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAdd = (e: any) => {
    e.preventDefault();
    navigate("/add")
  }

  const navToProfile = (e: any) => {
    e.preventDefault();
    navigate("/profile");
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <header className="flex justify-between items-center py-4 px-6 bg-gray-800 rounded-lg">
        <h1 className="text-3xl font-bold">HealthMate</h1>
      </header>

      <div className="flex mt-6 space-x-4">
        <div className="w-1/4 bg-gray-800 rounded-lg p-4 space-y-4">
          <button className="w-full flex items-center justify-start p-2 space-x-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            📰 <span>Medical News</span>
          </button>
          <button className="w-full flex items-center justify-start p-2 space-x-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            💊 <span>Drug Info</span>
          </button>
          <button className="w-full flex items-center justify-start p-2 space-x-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            👨‍⚕️ <span>Doctor</span>
          </button>
          <button className="w-full flex items-center justify-start p-2 space-x-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            📋 <span>Health Tips</span>
          </button>
          <button className="w-full flex items-center justify-start p-2 space-x-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            🔍 <span>Symptom</span>
          </button>
          <button className="w-full flex items-center justify-start p-2 mt-4 space-x-3 bg-red-600 rounded-lg hover:bg-red-500">
            🚪 <span>Sign Out</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Welcome and Info */}
          <div className="flex justify-between">
            <div className="w-3/5 bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Good morning, User</h2>
              <p className="text-gray-400 mb-4">
                Stay informed about your health:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Check Symptoms</span>
                  <button className="bg-gray-600 hover:bg-gray-500 py-1 px-4 rounded-lg">
                    Search
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>Search for conditions</span>
                  <button className="bg-gray-600 hover:bg-gray-500 py-1 px-4 rounded-lg">
                    Search
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>Get treatment info</span>
                  <button className="bg-gray-600 hover:bg-gray-500 py-1 px-4 rounded-lg">
                    Explore
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>Get personalized</span>
                  <button className="bg-gray-600 hover:bg-gray-500 py-1 px-4 rounded-lg">
                    Get Tips
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-[400px] bg-gray-700 hover:bg-gray-600 py-7 rounded-lg flex items-center justify-center space-x-5" onClick={navToProfile}>
                <span>👥</span> <span>Health Community</span>
              </button>
              <button className="w-[400px] bg-gray-700 hover:bg-gray-600 py-7 rounded-lg flex items-center justify-center space-x-5" onClick={handleAdd}>
                <span>➕</span> <span>Add Appointment</span>
              </button>
              <button className="w-[400px] bg-gray-700 hover:bg-gray-600 py-7 rounded-lg flex items-center justify-center space-x-5">
                <span>🗓️</span> <span>Reminder</span>
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3 bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Calendar</h3>
              <div className="grid grid-cols-7 gap-2 text-center text-gray-300">
                {Array.from({ length: 30 }, (_, i) => (
                  <span key={i + 1} className="p-2 rounded-lg bg-gray-700">
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-1/3 bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Health Events</h3>
              <p className="text-gray-400">No upcoming events</p>
            </div>

            <div className="w-1/3 bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Health Stats</h3>
              <div className="space-y-2 text-gray-400">
                <p>
                  Your health progress this week:{" "}
                  <span className="text-white">8</span>
                </p>
                <p>
                  Your fitness achievement this week:{" "}
                  <span className="text-white">16</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
