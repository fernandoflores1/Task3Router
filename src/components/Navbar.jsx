import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-center space-x-6 p-4">
      <Link to="/" className="hover:text-gray-300">
        Inicio
      </Link>
      <Link to="/listPage" className="hover:text-gray-300">
        Lista de Destinatarios
      </Link>
      <Link to="/addPresent" className="hover:text-gray-300">
        Agregar Regalo
      </Link>
    </nav>
  );
}

export default Navbar;