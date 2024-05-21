import React, { useState } from 'react'
import Imagen from '../assets/login-img.jpg'
import ImageProfile from '../assets/profile-img.jpg'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

export const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const autenticationEmail = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        if (registrando) {
            try {  
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("Asegurese que la contraseña tenga más de 8 caractereres")
            }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("El correo o la contraseña es incorrecta!")
                
            }
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }

    }


  return (
    <div className='container'>
        <div className="row">
            {/* Columna formulario */}
            <div className="col-md-4">
                <div className="padre">
                    <div className="card card-body shadow-lg">
                        <img src={ImageProfile} className='estilo-profile' />
                        <form onSubmit={autenticationEmail}>
                            <input type='text' placeholder='Ingresar Email' className='caja-texto' id="email"/>
                            <input type='password' placeholder='Ingresa Contraseña' className='caja-texto' id="password"/>
                            <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesión"}</button>
                        </form>
                        <h4 className='texto'>
                            {registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}
                                <button className='btn-switch' onClick={()=>setRegistrando(!registrando)}>
                                {registrando ? "Inicia sesión" : "Registrate"}
                            </button>
                        </h4>
                    </div>
                </div>
            </div>
            {/* Columna más grande */}
            <div className="col-md-8 ">
                <img src={Imagen} className="tamaño-imagen" />
            </div>
        </div>
    </div>
  )
}

export default Login