import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-fluid bg-light shadow-sm rounded-bottom">
      <header className="container d-flex flex-wrap align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center">
          <NavLink
            to="/"
            className="d-inline-flex align-items-center text-decoration-none"
          >
            <i
              className="fa-solid fa-book fa-xl me-2"
              style={{ color: "#0d6efd" }}
            ></i>
            <span className="fs-4 fw-bold text-primary">bookstore</span>
          </NavLink>
        </div>

        <ul className="nav justify-content-center mb-2 mb-md-0">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-3 fw-semibold ${
                  isActive ? "active text-primary" : "text-dark"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/book"
              className={({ isActive }) =>
                `nav-link px-3 fw-semibold ${
                  isActive ? "active text-primary" : "text-dark"
                }`
              }
            >
              Book
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `nav-link px-3 fw-semibold ${
                  isActive ? "active text-primary" : "text-dark"
                }`
              }
            >
              Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                `nav-link px-3 fw-semibold ${
                  isActive ? "active text-primary" : "text-dark"
                }`
              }
            >
              Kontak
            </NavLink>
          </li>
        </ul>

        <div className="d-flex">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>
    </div>
  );
}