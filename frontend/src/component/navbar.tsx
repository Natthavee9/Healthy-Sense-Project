import { Link } from "react-router-dom";
import logo from "../assets/unnamed-removebg-preview.png";

export default function Navbar() {
  return (
    <div className="w-full px-8 py-4 min-h-16 flex items-center justify-between shadow-sm sticky top-0 z-50 bg-white">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 text-3xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
          <img src={logo} alt="Healthy Sense Logo" className="h-10 w-auto" />
          Healthy Sense
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 text-xl text-green-700">
          <li><Link to="/machine-learning" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Machine Learning</Link></li>
          <li><Link to="/neural-network" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Neural Network</Link></li>
          <li><Link to="/demo-ml" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Demo ML</Link></li>
          <li><Link to="/demo-nn" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Demo NN</Link></li>
        </ul>
      </div>
    </div>
  );
}