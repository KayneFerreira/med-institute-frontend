'use client'
import React from "react";
import { useState } from "react";


const FormsDoctor = () => {
  const [data, setData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    dataNascimento: '',
    sexo: '',
    endereco: '',
    numero: '',
    cep: '',
    cidade: '',
    estado: '',
    especialidade: '',
    crm: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  

  const onClick = async (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(data);
    await fetch('http://localhost:8080/api/v4/test/medicos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => { console.log(data); })
      .catch((error) => { console.error(error); });
  };


  return (
    <form className="px-4" onSubmit={onClick}>
      <div className="row g-2 mb-4 d-flex justify-content-center">
        <div className="form-floating col-10 d-flex justify-content-center">
            <input type="text" className="form-control" name="nome" value={data.nome} onChange={handleChange} />
            <label htmlFor="nome">Nome Completo</label>
        </div>
      </div>
      <div className="row g-2 mb-4 d-flex justify-content-center">
        <div className="form-floating col-sm-4">
          <input type="text" className="form-control" name="dataNascimento" value={data.dataNascimento} onChange={handleChange} />
          <label htmlFor="dataNascimento">Data de Nascimento</label>
        </div>
        <div className="form-floating col-2">
          <input type="text" className="form-control" name="sexo" value={data.sexo} onChange={handleChange} />
          <label htmlFor="sexo">Sexo</label>
        </div>
        <div className="form-floating col-sm-4">
          <input type="text" className="form-control" name="cpf" value={data.cpf} onChange={handleChange} />
          <label htmlFor="cpf">CPF</label>
        </div>
      </div>

      <div className="row g-2 mb-4 d-flex justify-content-center">
        <div className="form-floating col-sm-4">
          <input type="text" className="form-control" name="telefone" value={data.telefone} onChange={handleChange} />
          <label htmlFor="telefone">Telefone/Celular</label>
        </div>
        <div className="form-floating col-6">
          <input type="text" className="form-control" name="email" value={data.email} onChange={handleChange} />
          <label htmlFor="email">E-Mail</label>
        </div>
      </div>

      <div className="row g-2 mb-4 d-flex justify-content-center">
        <div className="form-floating col-5">
          <input type="text" className="form-control" name="endereco" value={data.endereco} onChange={handleChange} />
          <label>Endereço</label>
        </div>
        <div className="form-floating col-sm-2">
          <input type="text" className="form-control" name="numero" value={data.numero} onChange={handleChange} />
          <label>Número</label>
        </div>
        <div className="form-floating col-sm-3">
          <input type="text" className="form-control" name="cep" value={data.cep} onChange={handleChange} />
          <label>CEP</label>
        </div>
      </div>

      <div className="row g-2 mb-4 d-flex justify-content-center">
        <div className="form-floating col-sm-6">
          <input type="text" className="form-control" name="cidade" value={data.cidade} onChange={handleChange} />
          <label>Cidade</label>
        </div>
        <div className="form-floating col-sm-4">
          <input type="text" className="form-control" name="estado" value={data.estado} onChange={handleChange} />
          <label>Estado</label>
        </div>
      </div>

      <div className="row g-2 mb-4 d-flex justify-content-center">
        <div className="form-floating col-sm-6">
          <input type="text" className="form-control" name="especialidade" value={data.especialidade} onChange={handleChange} />
          <label>Especialidade</label>
        </div>
        <div className="form-floating col-sm-4">
          <input type="text" className="form-control" name="crm" value={data.crm} onChange={handleChange} />
          <label>CRM</label>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-grid col-10">
          <button type="submit" className="btn btn-primary btn-lg">
              Registrar Médico
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormsDoctor