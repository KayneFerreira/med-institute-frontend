import React from "react";
import TableAppointment from "../components/TableAppointment";

const RegistrarConsulta = async () => {
  return (
    <div>
      <h1 className="text-center py-5">
        Consultas Marcadas
      </h1>
      <TableAppointment />
    </div>
  );
};

export default RegistrarConsulta;
