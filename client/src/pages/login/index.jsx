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
  const { login } = useContext(AuthContext);
  const [authorized, setAuthorized] = useState(false);
  const [passwordExists, setPasswordExists] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [emailExists, setEmailExists] = useState(false)
  const [newPassword, setNewPassword] = useState(false)
  const [userType, setUserType] = useState("")
  const [userInfo, setUserInfo] = useState("");

  const navigate = useNavigate();

  const { permission, id, name, email } = userInfo

  function Nav() {
    if (permission === "company") {
      navigate("/painel-empresa");
    } else if (permission === "admin") {
      navigate("/painel");
    } else if (permission === "user") {
      navigate("/painel-usuario");
    }
    login(id, email, name, permission)
  }

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
              (!emailExists && !passwordExists) &&
              <InsertEmail setEmailExists={setEmailExists} setPasswordExists={setPasswordExists} setUserEmail={setUserEmail} setNewPassword={setNewPassword} setUserType={setUserType} />
            }
            {
              (emailExists && passwordExists && !newPassword) &&
              <InsertPassword userEmail={userEmail} userType={userType} setAuthorized={setAuthorized} setUserInfo={setUserInfo} 
              setEmailExists={setEmailExists} setPasswordExists={setPasswordExists}
              />
            }
            {
              (emailExists && !passwordExists && newPassword) &&
              <InsertNewPassword userEmail={userEmail} userType={userType} />
            }
            {
              (authorized) &&
              <Nav />
            }

            <div id="alertMessage" className={styles.alertMessage}>
              <p>E-mail incorreto</p>
            </div>

            <div id="alertMessagePassword" className={styles.alertMessage}>
              <p>Senha incorreta</p>
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
