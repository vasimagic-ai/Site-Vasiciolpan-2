import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Acasă", path: "/" },
  { label: "Despre", path: "/despre" },
  { label: "HeartMapping™", path: "/heartmapping" },
  { label: "FAQ", path: "/faq" },
  { label: "Test ADAPT", path: "/adapt" },
  { label: "Oferte", path: "/oferte" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Vasi Ciolpan
      </a>

      <button
        className="navbar-burger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}>
        {navLinks.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                isActive ? "navbar-link navbar-link--active" : "navbar-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
