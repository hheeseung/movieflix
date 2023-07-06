import { Link } from "react-router-dom";
import { PiFilmSlate } from "react-icons/pi";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 border-b border-gray-200">
      <div className="flex items-center space-x-4 text-gray-500">
        <Link
          className="flex items-center font-semibold text-3xl text-blue-500"
          to="/"
        >
          <span>
            <PiFilmSlate />
          </span>
          <span>MovieFlix</span>
        </Link>
        <Link to="/">영화</Link>
        <Link to="/tvshows">드라마</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Search />
        <button className="bg-blue-500 text-white py-2 px-3 rounded-md hover:brightness-110">
          Login
        </button>
      </div>
    </nav>
  );
}
