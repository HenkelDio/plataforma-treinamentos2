import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Axios from "axios"
import styles from "../modalEdit.module.css";

const SelectRegistration = (props) => {

  const { selected, setSelected, userId } = props

  const [options, setOptions] = useState([]);
  
  useEffect(_ => {
    const getCourses = async _ => {
      let userType = "company"
      let userId = props.companyId
      await Axios.post(`${require("../../../../../defaultRoute")}/Courses`, {
        userType,
        selectCrets: {
          company_id: userId
        }
      }).then(res => {
        if (res) {
          let courses = []
          res.data.map(course => {
            courses.push({ label: course.course_title, value: course.course_id })
          })
          setOptions(courses)
        }
      })
    }
    getCourses();
  }, [])

  useEffect(_ => {
    const getUserRegistrations = async _ => {
      let userType = "usualUser";
      let route = `${require("../../../../../defaultRoute")}/Courses`
      await Axios.post(route, {
        userType,
        selectCrets: {
          user_id: userId
        }
      }).then(res => {
        if (res) {
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
