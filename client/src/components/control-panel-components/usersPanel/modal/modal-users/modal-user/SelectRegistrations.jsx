import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styles from "./modalUser.module.css"

const options = [
  { label: "NR 20", value: "nr20" },
  { label: "NR 25", value: "nr21" },
];


const SelectRegistration = () => {
  const [selected, setSelected] = useState([]);

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
