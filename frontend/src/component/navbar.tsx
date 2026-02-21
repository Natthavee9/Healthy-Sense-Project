import logo from "../assets/unnamed-removebg-preview.png";

export default function Navbar() {
  return (
    <div className="w-full px-8 py-4 min-h-16 flex items-center justify-between shadow-sm">
      <div className="navbar-start">
        <a className="flex items-center gap-2 text-3xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
          <img src={logo} alt="Healthy Sense Logo" className="h-10 w-auto" />
          Healthy Sense
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 text-xl text-green-700">
          <li><a href="/" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Machine Learning</a></li>
          <li><a href="/" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Neural Network</a></li>
          <li><a href="/" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Demo ML</a></li>
          <li><a href="/" className="hover:text-cyan-500 hover:!bg-transparent active:!bg-transparent focus:!bg-transparent transition-colors">Demo NN</a></li>
        </ul>
      </div>
    </div>
  );
}