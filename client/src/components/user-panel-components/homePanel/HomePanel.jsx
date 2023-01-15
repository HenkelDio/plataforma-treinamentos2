import styles from "./homePanel.module.css";
import TrainingBox from "./trainings/TrainingBox";
import { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../../loading/Loading";

export default function HomePanel() {
  const [listTraining, setListTraining] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(_ => {
    setLoading(true)
    const getCourse = async _ => {
      let userType = "usualUser"
      let userId = JSON.parse(localStorage["user"]).id
      let route = `${require("../../../defaultRoute")}/Courses`
      await Axios.post(route, {
        userType,
        selectCrets: {
          user_id: userId,
          status: "incompleto"
        }
      }).then(res => {
        if (res) {
          setListTraining(res.data)
          setLoading(false)
        } else {
          setLoading(false)
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
            (loading) &&
            <Loading />
          }

          {

            (listTraining.length !== 0) &&
            listTraining.map((val) => {
              return <TrainingBox
                data={val}
              />
            })
          }
          {
            (listTraining.length === 0) &&
            <p>Nenhum curso matriculado no momento*</p>
          }
        </div>
      </div>
    </>
  );
}
