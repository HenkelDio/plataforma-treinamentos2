import styles from "./about.module.css";
import HeaderPages from "../components/home-pages/HeaderPages";

export default function AboutPage(){
  return(
    <>
    <HeaderPages />
     
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>Sobre</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae ratione nihil ut eaque alias, aperiam eum cumque dicta iure, repellat officiis consectetur facere necessitatibus fugit! Ipsum, veniam? Id, impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae ratione nihil ut eaque alias, aperiam eum cumque dicta iure, repellat officiis consectetur facere necessitatibus fugit! Ipsum, veniam? Id, impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae ratione nihil ut eaque alias, aperiam eum cumque dicta iure, repellat officiis consectetur facere necessitatibus fugit! Ipsum, veniam? Id, impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae ratione nihil ut eaque alias, aperiam eum cumque dicta iure, repellat officiis consectetur facere necessitatibus fugit! Ipsum, veniam? Id, impedit.</p>
        </div>
      </div>
    </div>

    </>
  )
}