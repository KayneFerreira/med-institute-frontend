'use client'
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  })
  
  return (
    <div className='row container align-items-center py-5'>
      <div className="col-6 px-5 text-end">
        <h1>Instituto Med Center</h1>
        <h5>Medicina de qualidade ao seu alcance.</h5>
        <div>
          <Link className="btn btn-primary my-3 mx-3" href="/agenda">Agenda</Link>
          <Link className="btn btn-secondary my-3" href="/agendar-consulta">Agendar Consulta</Link>
        </div>
      </div>
      <div className="col-6">
        <Image 
          src="/images/stock_01.png"
          width={500}
          height={300}
          alt="Clinica foto 01"
        />
      </div>
    </div>
  )
}
