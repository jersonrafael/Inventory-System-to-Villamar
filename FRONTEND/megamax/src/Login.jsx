import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./components/context";

function Login() {

  const loginStatus = useContext(LoginContext)

  const [formUsername, setUserName] = useState("");
  const [formPassword, setPassword] = useState("")

  function loginUser(user, pass) {

    axios.post('http://localhost:8000/api/token/', {
      username: user,
      password: pass
    })
      .then((response) => {
        let token = response.data.refresh
        localStorage.setItem("token", token)
        location.href = '/'
      })
      .catch((err) => {
        localStorage.setItem("token", "")
      })
  }

  function handleChangeUser(e) {
    let user = e.target.value;
    setUserName(user);
  }

  function handleChangePass(e) {
    let pass = e.target.value;
    setPassword(pass);
  }

  function handleSubmit(e) {
    e.preventDefault();

    loginUser(formUsername, formPassword)
  }

  if (loginStatus) {
    location.href = '/'
  } else {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center border border-2" style={{ height: '100vh' }}>
          <div className="w-25 border rounded p-4 shadow">
            <form action="" onSubmit={handleSubmit}>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="ejemplo" onChange={handleChangeUser}
                  value={formUsername} />
                <label for="floatingInput">Nombre Usuario</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Coñtraseña" onChange={handleChangePass}
                  value={formPassword} />
                <label for="floatingPassword">Contraseña</label>
              </div>
              <button type="submit" class="btn btn-primary mt-2">Login</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
