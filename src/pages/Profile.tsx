import { FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <div className="w-1/4 bg-gray-800 p-6 space-y-4">
        <h1 className="text-2xl font-bold text-white">HealthMate</h1>
        <nav className="mt-6 space-y-2">
          <button className="w-full flex items-center space-x-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            📰 <span>Medical News</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            💊 <span>Drug Info</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            👨‍⚕️ <span>Doctor</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            📋 <span>Health Tips</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            🔍 <span>Symptom</span>
          </button>
          <button className="mt-6 w-full flex items-center space-x-3 p-2 bg-red-600 hover:bg-red-500 rounded-lg">
            🚪 <span>Sign Out</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 p-8 space-y-8">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">Harshal Dulera</h2>
            <p className="text-gray-400">harshal.dulera@somaiya.edu</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="eg. Harshal"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Nick Name</label>
            <input
              type="text"
              placeholder="eg. bear"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Gender</label>
            <input
              type="text"
              placeholder="eg. Male"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Country</label>
            <input
              type="text"
              placeholder="eg. India"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Language</label>
            <input
              type="text"
              placeholder="eg. English"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Time Zone</label>
            <input
              type="text"
              placeholder="eg. IST"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white">My email Address</h3>
          <div className="flex items-center space-x-4 mt-2">
            <FaEnvelope className="text-blue-500" />
            <div>
              <p className="text-white">harshal.dulera@somaiya.edu</p>
              <p className="text-gray-400 text-sm">1 month ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
