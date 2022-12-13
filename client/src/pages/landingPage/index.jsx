import styles from './index.module.css';
import logo from '../../assets/logo.png'

window.onscroll = function() {onscrollHeader()}

function onscrollHeader(){
  if(document.documentElement.scrollTop > 600){
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "fixed"
    innerHeader.style.backgroundColor = "rgb(63, 63, 63)"
  } else {
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "sticky"
    innerHeader.style.backgroundColor = "transparent"
  }
}
  

export default function LandingPage(){
  return(
    <div className={styles.LandingPage}>
      <div className={styles.header}>
        <div id="innerHeader" className={styles.innerHeader}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>
          <div className={styles.menu}>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Treinamentos</a></li>
              <li><a href="/login"><button className={styles.btnOpenLogin}>ENTRAR</button></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsText}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi aperiam molestias veritatis! Cumque consectetur mollitia voluptate aliquid eius modi aut quo reiciendis distinctio. Reprehenderit ipsum corrupti nesciunt ipsam. Vitae.</p>
            <button>ACESSAR</button>
          </div>
        </div>
      </div>
      <div className={styles.bodyPage}>
        <section className={styles.about}>
          <div className={styles.title}>
            <h2>Sobre</h2>
          </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore distinctio atque numquam temporibus odio corrupti sed qui, praesentium ipsum, rerum nobis quisquam repudiandae voluptatum doloribus consectetur, molestias perferendis rem. Temporibus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore distinctio atque numquam temporibus odio corrupti sed qui, praesentium ipsum, rerum nobis quisquam repudiandae voluptatum doloribus consectetur, molestias perferendis rem. Temporibus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore distinctio atque numquam temporibus odio corrupti sed qui, praesentium ipsum, rerum nobis quisquam repudiandae voluptatum doloribus consectetur, molestias perferendis rem. Temporibus.
            </p>
        </section>
      </div>
    </div>
  )
}