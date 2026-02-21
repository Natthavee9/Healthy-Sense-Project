// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-bg">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Healthy Sense</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </div>
    </div>
  );
}