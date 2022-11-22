import styles from "./homePanel.module.css";

import { HiUsers } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";

export default function HomePanel({ onSubmit }) {
  const [usersPage, setUsersPage] = useState("users");
  const [trainingsPage, setTrainingsPage] = useState("trainings");
  const [settingsPage, setSettingsPage] = useState("settings");

  const handlePageHomePanel = (page) => {
    onSubmit({ page });
  };

  const setPageUsers = () => {
    setUsersPage("users");
    handlePageHomePanel(usersPage);

    let menuLabels = document.querySelectorAll("#menu ul li");
    for (let i = 0; i < menuLabels.length; i++) {
      menuLabels[i].style.borderBottom = "none";
    }

    let userLabel = document.getElementById("users");
    userLabel.style.borderBottom = "2px solid #ccc";
  };

  const setPageTrainings = () => {
    setTrainingsPage("trainings");
    handlePageHomePanel(trainingsPage);

    let menuLabels = document.querySelectorAll("#menu ul li");
    for (let i = 0; i < menuLabels.length; i++) {
      menuLabels[i].style.borderBottom = "none";
    }

    let trainingLabel = document.getElementById("trainings");
    trainingLabel.style.borderBottom = "2px solid #ccc";
  };

  const setPageSettings = () => {
    setSettingsPage("settings");
    handlePageHomePanel(settingsPage);

    let menuLabels = document.querySelectorAll("#menu ul li");
    for (let i = 0; i < menuLabels.length; i++) {
      menuLabels[i].style.borderBottom = "none";
    }

    let settingsLabel = document.getElementById("settings");
    settingsLabel.style.borderBottom = "2px solid #ccc";
  };

  return (
    <>
      <div className={styles.homePanel}>
        <div className={styles.headerHomePanel}>
          <h2>Você está matriculado em</h2>
        </div>
        <div className={styles.bodyHomePanel}>
          <div className={styles.trainingBox}>
            <p>NR 20: Inflamáveis e Combustíveis</p>
          </div>
        </div>
      </div>
    </>
  );
}
