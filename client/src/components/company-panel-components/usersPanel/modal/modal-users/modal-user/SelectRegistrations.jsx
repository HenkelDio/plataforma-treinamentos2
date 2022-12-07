import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Axios from "axios"
import styles from "./modalUser.module.css"

const SelectRegistration = (props) => {

  const { selected, setSelected } = props

  const [options, setOptions] = useState([]);

  useEffect(_ => {
    const getCourses = async _ => {
      let userType = "admin"
      let userId = "0"
      await Axios.get(`${require("../../../../../../defaultRoute")}/Courses/${userType}/${userId}`).then(res => {
        if (res) {
          let courses = []
          res.data.map(course => {
            courses.push({label: course.course_title, value: course.course_id})
          })
          setOptions(courses)
        }
      })
    }
    getCourses();
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
