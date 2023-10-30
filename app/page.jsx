'use client'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  })
  
  return (
    <div className='text-center py-5'>
      <h1>Instituto Med Center</h1>
    </div>
  )
}
