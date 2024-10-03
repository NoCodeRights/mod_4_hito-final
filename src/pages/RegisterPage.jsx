import { useState } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validaRegister = (e) => {
    e.preventDefault();
    if (
      email.toLowerCase().trim() == "" ||
      password.trim() == "" ||
      confirmPassword.trim() == ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    } else {
      if (password === confirmPassword && password.length >= 6) {
        Swal.fire({
          title: "Aprobado",
          text: "Formulario enviado exitosamente",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "La contraseña no coincide y/o tiene menos de 6 caracteres. Intente nuevamente.",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    }
    const pattern = new RegExp(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    );

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ width: "75rem" }}
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <h1>Regístrate</h1>
          <form onSubmit={(e) => validaRegister(e)}>
            <div>
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                className="form-control"
                id="confirmPass"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary m-2">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
