'use client'
import React from "react";
import { useState, useEffect } from "react";
import { InputMask } from "primereact/inputmask";
import { insertFailed, insertSuccess } from "../components/Alerts"


const AppointmentUpdate = ({ searchParams }) => {
  const urlConsulta = 'http://localhost:8080/api/v4/test/consultas'
  const urlMedico = 'http://localhost:8080/api/v4/test/medicos'
  
  const [data, setData] = useState({
    id: searchParams.id,
    nomePaciente: searchParams.nomePaciente,
    sexo: searchParams.sexo,
    nomeMedico: searchParams.nomeMedico,
    especialidade: searchParams.especialidade,
    data: searchParams.data,
    hora: searchParams.hora,
    formaPagamento: searchParams.formaPagamento,
    valor: searchParams.valor,
    convenio: searchParams.convenio,
    numeroCarteira: searchParams.numeroCarteira
  })
  
  const [medicos, setMedico] = useState({})
  const [especialidade, setEspecialidade] = useState("");

  useEffect(() => {
    fetch(urlMedico)
      .then((response) => response.json())
      .then((data) => setMedico(data))
      .catch((error) => console.error(error));
  }, []);


  /**
   * Handle input change from forms
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "especialidade") {
      setEspecialidade(value);
    } else {
      setData({ ...data, [name]: value });
    }
  };


  // !!! TEST FUNCTION
  const testData = () => {
    for (const key in data) {
      console.log(`${key}: ${data[key]}`)
    }
    // for (const key in filteredData) {
    //   console.log(`${key}: ${filteredData[key]}`)
    // }
  }


  /**
   * Handle click event
   * POST request
   */
  const onClick = async (e) => {
    e.preventDefault();
    testData()
    const jsonData = JSON.stringify(data);
    await fetch(`${urlConsulta}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((response) => {
        if (response.status === 201) {
          response.json()
          insertSuccess()
        }
        else {
          insertFailed(response.status)
        }
      })
      .then((data) => { console.log(data); })
      .catch((error) => { console.error(error); });
  };


  /**
   * Filter special charaters from inserted data
   */
  const filterData = () => {
    const newData = {};
    for (const key in data) {
      const value = data[key];
      if (key === 'data' || key === 'hora') {
        newData[key] = value.replace(/[^\w]/gi, '');
      }
      else {
        newData[key] = value
      }
    }
    setFilteredData(newData);
  }


  return (
    <div>
      <h1 className="text-center py-4">
        Editar Consulta
      </h1>
      
      <form className="px-4" onSubmit={onClick}>
        <div className="row g-2 mb-4 d-flex justify-content-center">
          {searchParams && (
            <h5 className="col-sm-10">
              <b>Nome do Paciente: </b> {searchParams.nome} <br />
              <b>Data de Nascimento: </b> {searchParams.dataNascimento} <br />
              <b>Sexo: </b> {searchParams.sexo} <br />
            </h5>
          )}
        </div>

        {medicos && (
        <div className="row g-2 mb-4 d-flex justify-content-center">
          <div className="form-floating col-sm-4">
            <select 
            name="especialidade" 
            id="especialidade" 
            type="text" 
            className="form-select" 
            value={data.especialidade} 
            onChange={handleChange}>
              <option value="">-- Escolha a Especialidade --</option>
              {Object.keys(medicos).map((key, i) => {
                return <option key={i}> { medicos[key].especialidade } </option> 
              })}
            </select>
            <label htmlFor="especialidade">Especialidade</label>
          </div>

          <div className="form-floating col-sm-6">
            <select 
            name="medico" 
            id="medico" 
            className="form-control" 
            placeholder="Nome do Médico" 
            value={data.medico}
            onChange={handleChange}>
              <option value="">-- Escolha o Medico Especialista --</option>
              {Object.keys(medicos)
                .filter((key) => medicos[key].especialidade === especialidade)
                .map((key, i) => (
                  <option key={i} value={medicos[key].id}>{medicos[key].nome}</option>
              ))}
            </select>
            <label htmlFor="medico">Nome do Médico</label>
          </div>
        </div>
        )}

        <div className="row g-2 mb-4 d-flex justify-content-center">
          <div className="form-floating col-sm-2">
            <input 
            name="data" 
            id="data"
            className="form-control" 
            value={data.data} 
            onChange={handleChange} 
            placeholder="Data da Consulta" />
            <label htmlFor="data">Data da Consulta</label>
          </div>

          <div className="form-floating col-sm-2">
            <input 
            name="hora" 
            id="hora" 
            type="text" 
            className="form-control" 
            placeholder="Horário" 
            value={data.hora} 
            onChange={handleChange} />
            <label htmlFor="hora">Horário</label>
          </div>

          <div className="form-floating col-sm-3">
            <select 
            name="formaPagamento" 
            id="formaPagamento" 
            type="text" 
            className="form-control" 
            placeholder="Forma de Pagamento" 
            value={data.formaPagamento} 
            onChange={handleChange}>
              <option value="">-- Escolha a Forma de Pagamento --</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Credito">Cartão de Crédito</option>
              <option value="Pix">Pix</option>
            </select>
            <label htmlFor="formaPagamento">Forma de Pagamento</label>
          </div>

          <div className="form-floating col-sm-3">
            <input 
            name="valor" 
            id="valor" 
            type="text" 
            className="form-control" 
            placeholder="Valor Total" 
            value={data.valor} 
            onChange={handleChange} />
            <label htmlFor="valor">Valor Total</label>
          </div>
        </div>

        <div className="row g-2 mb-4 d-flex justify-content-center">
          <div className="form-floating col-sm-5">
            <input 
            name="convenio" 
            id="convenio" 
            type="text" 
            className="form-control" 
            placeholder="Convênio" 
            value={data.convenio} 
            onChange={handleChange} />
            <label htmlFor="convenio">Convênio</label>
          </div>

          <div className="form-floating col-sm-5">
            <input 
            name="numeroCarteira" 
            id="numeroCarteira" 
            type="text" 
            className="form-control" 
            placeholder="Número da Carteira" 
            value={data.numeroCarteira} 
            onChange={handleChange} />
            <label htmlFor="numeroCarteira">Número da Carteira</label>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-grid col-10">
            <button type="submit" className="btn btn-primary btn-lg">
                Agendar Consulta
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AppointmentUpdate