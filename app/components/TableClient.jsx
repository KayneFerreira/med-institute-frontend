'use client'
import React from 'react'
import { useState, useEffect } from "react";
import { deleteFailed, deletePrompt } from './Alerts';


const TableClient = () => {
  const url = "http://localhost:8080/api/v4/test/pacientes"

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);


  const deleteById = async (id) => {
    console.log(id)
    await fetch(url + '/' + id, {
      method: 'DELETE'
    })
    .then((response) => {
      const status = response.status
      if (status >= 200 && status < 300) {
        deletePrompt()
      }
      else {
        deleteFailed(status)
      }
    })
    .then((data) => { console.log(data); })
    .catch((error) => { console.error(error); });
  }


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
            <th id='clientId'>{paciente.id}</th>
            <td>{paciente.nome}</td>
            <td>{paciente.sexo}</td>
            <td>{paciente.dataNascimento}</td>
            <td>{paciente.telefone}</td>
            <td>{paciente.email}</td>
            <td>
              <button 
              className='btn btn-success btn-sm' 
              data-bs-toggle="modal" 
              data-bs-target="#detailsClient">
                Detalhes/Editar
              </button>
              <button 
              className='btn btn-danger btn-sm mx-2' 
              onClick={() => deleteById(paciente.id)}>
                Excluir
              </button>
              
              <div className="modal fade" id="detailsClient" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Detalhes do Paciente</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                      <button type="button" className="btn btn-primary">Editar</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableClient