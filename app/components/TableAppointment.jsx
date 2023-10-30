"use client";
import React from "react";
import { useState, useEffect } from "react";


const TableAppointment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v4/test/consultas")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Paciente</th>
          <th scope="col">Sexo</th>
          <th scope="col">Especialidade</th>
          <th scope="col">Medico</th>
          <th scope="col">Data</th>
          <th scope="col">Horário</th>
        </tr>
      </thead>

      <tbody>
        {data.map((agenda) => (
          <tr key={agenda.id}>
            <td>{agenda.id}</td>
            <td>{agenda.paciente.nome}</td>
            <td>{agenda.paciente.sexo}</td>
            <td>{agenda.medico.especialidade}</td>
            <td>{agenda.medico.nome}</td>
            <td>{agenda.data}</td>
            <td>{agenda.hora}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAppointment;
