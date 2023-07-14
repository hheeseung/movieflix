import { Link, useLocation } from "react-router-dom";
import { PiFilmSlate } from "react-icons/pi";
import SearchForm from "./SearchForm";

export default function Navbar() {
  const { pathname } = useLocation();

  const nowLocation = (path: string) => {
    if (pathname.includes(path)) {
      return "font-semibold text-black";
    }
  };

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
        <Link className={`${nowLocation("/movies")} hover:text-black`} to="/">
          영화
        </Link>
        <Link
          className={`${nowLocation("/tvshows")} hover:text-black`}
          to="/tvshows"
        >
          TV
        </Link>
        <Link
          className={`${nowLocation("/likes")} hover:text-black`}
          to="/likes"
        >
          찜한 목록
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <SearchForm />
      </div>
    </nav>
  );
}
