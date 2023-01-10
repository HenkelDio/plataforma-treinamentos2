import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Axios from "axios"
import styles from "../modalEdit.module.css";

const SelectRegistration = (props) => {

  const { selected, setSelected } = props

  const [options, setOptions] = useState([]);

  useEffect(_ => {
    const getCourses = async _ => {
      let userType = "admin"
      let userId = "0"
      await Axios.get(`${require("../../../../../defaultRoute")}/Courses/${userType}/${userId}`).then(res => {
        if (res) {
          setOptions(res.data.map(course => ({ label: course.course_title, value: course.course_id })))
        }
      })
    }
    getCourses();
  }, [])

  useEffect(_ => {
    const getUserRegistrations = async _ => {
      let userType = "usualUser";
      let userId = JSON.parse(localStorage["user"]).id
      let route = `${require("../../../../../defaultRoute")}/Courses/${userType}/${userId}`
      await Axios.get(route).then(res => {
        if (res) {
          console.log(res)
          setSelected(res.data.map(registration => ({ label: registration.course_title, value: registration.course_id })))
        }
      })
    }
    getUserRegistrations()
  }, [])

  const customValueRenderer = (selected, _options) => {
    return selected.length
      ? selected.map(({ label }) => "✔️ " + label)
      : "Nenhum treinamento selecionado ";
  };

  return (
    <div>
      <MultiSelect
        className={styles.selectRegistration}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={("labelledBy", "Select Fruits")}
        valueRenderer={customValueRenderer}
      />
    </div>
  );
};

export default SelectRegistration;
