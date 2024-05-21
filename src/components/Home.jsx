import React from 'react'
import appFirebase from '../credenciales'
import { signOut, getAuth } from 'firebase/auth'
const auth = getAuth(appFirebase);

export const Home = ({correoUsuario}) => {
  return (
    <div><h2 className='text-center'>Bienvenido {correoUsuario} <button className='btn btn-primary' onClick={()=>signOut(auth)}> Log Out </button> </h2></div>
  )
}

export default Home