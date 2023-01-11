import styles from "./homePanel.module.css";
import TrainingBox from "./trainings/TrainingBox";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function HomePanel() {
  const [listTraining, setListTraining] = useState([])
  useEffect(_ => {
    const getCourse = async _ => {
      let userType = "usualUser"
      let userId = JSON.parse(localStorage["user"]).id
      let route = `${require("../../../defaultRoute")}/Courses/${userType}/${userId}`
      await Axios.post(route, {
        userType,
        selectCrets: {
          user_id: userId,
          status: "incompleto"
        }
      }).then(res => {
        if (res) {
          setListTraining(res.data)
        }
      })
    }
    getCourse()
  }, []);

  return (
    <>
      <div className={styles.homePanel}>
        <div className={styles.headerHomePanel}>
          <h2>Você está matriculado em:</h2>
        </div>
        <div className={styles.bodyHomePanel}>
          {
            listTraining.map((val) => {
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
