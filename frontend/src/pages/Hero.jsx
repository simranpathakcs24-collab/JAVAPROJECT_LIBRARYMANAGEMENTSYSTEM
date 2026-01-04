import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Hero() {
  const role = localStorage.getItem("role");

  return (
    <>       <Navbar />
      
        <div className="h-screen bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Library Management System
        </h1>

        <p className="text-lg mb-6">
          Manage books, users, borrowing and returns easily
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/Login"
            className="bg-white text-blue-600 px-6 py-2 rounded font-semibold"
          >
            Explore Books
          </Link>

          {role === "ADMIN" && (
            <Link
              to="/register"
              className="bg-black text-white px-6 py-2 rounded"
            >
              Register User
            </Link>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
