'use client'
import React from 'react'
import { useState, useEffect } from "react";

const TableDoctor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v4/test/medicos")
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
          <th scope="col">Especialidade</th>
          <th scope="col">CRM</th>
          <th scope="col">Sexo</th>
          <th scope="col">Telefone</th>
          <th scope="col">E-Mail</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>

      <tbody>
        {data.map((medico) => (
          <tr key={medico.id}>
            <th>{medico.id}</th>
            <td>{medico.nome}</td>
            <td>{medico.especialidade}</td>
            <td>{medico.crm}</td>
            <td>{medico.sexo}</td>
            <td>{medico.telefone}</td>
            <td>{medico.email}</td>
            <td>
              <button className='btn btn-success btn-sm'>Detalhes/Editar</button>
              <button className='btn btn-danger btn-sm mx-2'>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableDoctor