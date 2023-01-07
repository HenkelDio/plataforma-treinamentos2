import Header from "../../components/user-panel-components/header/Header";
import HomePanel from "../../components/user-panel-components/homePanel/HomePanel";
import CertificatePanel from "../../components/user-panel-components/certificatesPanel/CertificatePanel";
import { useState } from "react";
import styles from "./userPanel.module.css";

import { FaBook } from "react-icons/fa";

export default function UserPanel() {
  const [page, setPage] = useState("home");

  const handlePage = ({ page }) => {
    setPage(page);
  };

  const handlePageHomePanel = ({ page }) => {
    setPage(page);
  };

  return (
    <>
      <Header onSubmit={handlePage} />
      <section className={styles.controlPanel}>
        <div className={styles.headerPanel}>
          <h1>Treinamentos</h1>
          <div className={styles.iconPanel}>
            <p>
              <FaBook />
            </p>
          </div>
        </div>
        <div className={styles.bodyPanel}>
          {page === "home" && <HomePanel onSubmit={handlePageHomePanel} />}
          {page === "certificates" && <CertificatePanel onSubmit={handlePageHomePanel} />}
        </div>
      </section>
    </>
  );
}
