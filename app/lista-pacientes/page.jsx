import React from 'react'
import TableClient from '../components/TableClient'

const ListClients = async () => {
  return (
    <div>
      <h1 className='text-center py-4'>
        Lista de Pacientes
      </h1>
      <TableClient />
    </div>
  )
}

export default ListClients