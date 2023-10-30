'use client'
import React from 'react'
import { useState, useEffect } from "react";

const TableClient = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v4/test/pacientes")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Sexo</th>
          <th scope="col">Data de Nascimento</th>
          <th scope="col">Telefone</th>
          <th scope="col">E-Mail</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>

      <tbody>
        {data.map((paciente) => (
          <tr key={paciente.id}>
            <th>{paciente.id}</th>
            <td>{paciente.nome}</td>
            <td>{paciente.sexo}</td>
            <td>{paciente.dataNascimento}</td>
            <td>{paciente.telefone}</td>
            <td>{paciente.email}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableClient