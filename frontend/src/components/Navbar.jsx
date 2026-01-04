import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() =>
          role === "ADMIN" ? navigate("/admin") : navigate("/student")
        }
      >
        📚 Library Management
      </h1>

      <div className="flex items-center gap-4">
        {username && (
          <span className="text-sm bg-gray-700 px-3 py-1 rounded">
            Hi, {username}
          </span>
        )}

        {role === "ADMIN" && (
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            Register User
          </button>
        )}

        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
