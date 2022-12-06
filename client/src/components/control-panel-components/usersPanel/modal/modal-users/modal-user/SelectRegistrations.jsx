import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Axios from "axios"
import styles from "./modalUser.module.css"

const SelectRegistration = (props) => {

  const {selected, setSelected} = props

  const [options, setOptions] = useState([]);

  useEffect(_ => {
    const getcourses = async _ => {
      await Axios.get(`${require("../../../../../../defaultRoute")}/Courses/admin`, res => {
        if (res) {
          console.log(res)
        }
      })
    }
    getcourses();
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
