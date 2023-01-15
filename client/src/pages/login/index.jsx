import styles from "./login.module.css";
import { useContext, useState } from "react";
import { BsFileLockFill } from "react-icons/bs";
import Axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import InsertEmail from "./components/insertEmail";
import InsertPassword from "./components/InsertPassword";
import InsertNewPassword from "./components/InsertNewPassword";


export default function Login() {
  const { authenticated, login, setPermission } = useContext(AuthContext);
  const [passwordExists, setPasswordExists] = useState(false)
  const [emailExists, setEmailExists] = useState(false)
  const [newPassword, setNewPassword] = useState(false)
  const [userType, setUserType] = useState("")

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    //recebe valores do form e verifica na rota loginUser. Rsultado retorna se usuário foi authenticado e permissão
    let route = `${require("../../defaultRoute")}/loginUser`
    await Axios.post(route, { values }).then(
      (res) => {
        if (res) {
          if (res.data.permission === "company") {
            navigate("/painel-empresa");
          } else if (res.data.permission === "admin") {
            navigate("/painel");
          } else if (res.data.permission === "user") {
            navigate("/painel-usuario");
          } else {
            let alertMessage = document.getElementById("alertMessage")
            alertMessage.style.display = "block";
            return;
          }
        }
        login(res.data.id, values.email, values.password, res.data.name, res.data.permission) // integração com o context
      }
    );
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.innerLoginContainer}>
        <div className={styles.loginHeader}>
          <div className={styles.icon}>
            <span>
              <BsFileLockFill />
            </span>
          </div>
          <div className={styles.label}>
            <p>Login</p>
          </div>
        </div>
        <div className={styles.loginBody}>
          <div className={styles.loginForm}>
            {
              (!emailExists) &&
              <InsertEmail setEmailExists={setEmailExists} setPasswordExists={setPasswordExists} setUserType={setUserType} />
            }
            {
              (passwordExists) &&
              <InsertPassword />
            }
            {
              (newPassword) &&
              <InsertNewPassword />
            }


            <div className={styles.loginOpt}>
              <a href="https://wa.me/5541996588728/">Esqueceu a senha?</a>
              <a href='https://wa.me/5541996588728?text=Tenho interesse em criar uma conta na ST Treinamentos!'>Não tem uma conta?</a>
            </div>
          </div>
        </div>
        <div className="loginFooter">
          <p>Copyright © Souza Treinamentos 2022.</p>
        </div>
      </div>
    </div>
  );
}
