import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Instituto Med Center
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>


            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Agenda/Listas
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/agenda">
                    Agenda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/lista-pacientes">
                    Lista de Pacientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/lista-medicos">
                    Lista de Medicos
                  </Link>
                </li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Agendamento/Registro
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/">
                    Agendar Consulta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/registrar-paciente">
                    Registrar Paciente
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/registrar-medico">
                    Registrar Medico
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
