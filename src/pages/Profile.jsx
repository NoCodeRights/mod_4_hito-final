import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";


const Profile = () => {
  const {logout} = useContext(AuthContext);
  return (
    <div>

      <h1>Perfil de Usuario</h1>
      <p>Email: usuario@ejemplo.com</p>
      <p>Nombre: ComePizza</p>
      <Button variant="danger" onClick={logout}>Cerrar Sesión</Button>
    </div>
  );
};

export default Profile;
