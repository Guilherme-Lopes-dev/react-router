import React from 'react'
import { useParams } from 'react-router-dom'


const Params = (props) => {
    const {id} = useParams()
  return (
    <div className='Params'> 
        <h2>Valor:{id}</h2>
    </div>
  )
}

export default Params