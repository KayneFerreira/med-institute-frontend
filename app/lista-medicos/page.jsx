import React from 'react'
import TableDoctor from '../components/TableDoctor'

const ListDoctors = async () => {
  return (
    <div>
      <h1 className='text-center py-5'>
        Lista de Medicos
      </h1>
      <TableDoctor />
    </div>
  )
}

export default ListDoctors