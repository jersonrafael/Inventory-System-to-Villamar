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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChangeUser}
            value={formUsername}
            placeholder="Nombre Usuario"
          />

          <input
            type="text"
            onChange={handleChangePass}
            value={formPassword}
            placeholder="Contraseña"
          />
          <button type="submit">Log in</button>
        </form>
      </>
    );
  }
}

export default Login;
