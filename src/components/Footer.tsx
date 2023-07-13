import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 p-8 mt-8 border-t border-gray-200">
      <p>&copy;Heeseung Ha</p>
      <Link to="https://github.com/hheeseung">
        https://github.com/hheeseung
      </Link>
    </footer>
  );
}
