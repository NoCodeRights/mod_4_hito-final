import React from 'react'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const {logout} = useContext(AuthContext);
  return (
    <>
    <div style={{height: '50vh', textAlign: 'center', marginTop: '80px'}}>
<p> ¿Desea cerrar sesión? </p>
      <Button variant= 'dark' onClick={logout} > Cerrar Sesión </Button>
      <NavLink to= "/"> <button> Volver al inicio </button> </NavLink>
      </div>
      </>
  )
}

export default Logout