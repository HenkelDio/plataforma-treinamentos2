import styles from "./homePanel.module.css";
import TrainingBox from "./trainings/TrainingBox";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function HomePanel({ onSubmit }) {
  const [usersPage, setUsersPage] = useState("users");
  const [trainingsPage, setTrainingsPage] = useState("trainings");
  const [settingsPage, setSettingsPage] = useState("settings");
  const [listTraining, setListTraining] = useState([])

  useEffect(_=>{
    const getCourse = async _ => {
      let route = `${require("../../../defaultRoute")}/Course`
        await Axios.get(route).then(res => {
            if (res) {
                setListTraining(res.data)
                console.log(res.data)
            }
        })
    }
    getCourse()
}, [])

  const handlePageHomePanel = (page) => {
    onSubmit({ page });
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
          <h2>Você está matriculado em:</h2>
        </div>
        <div className={styles.bodyHomePanel}>
          {
            listTraining.map((val)=>{
              return <TrainingBox 
              data={val}
              />
            })
          }
          
          
        </div>
      </div>
    </>
  );
}
