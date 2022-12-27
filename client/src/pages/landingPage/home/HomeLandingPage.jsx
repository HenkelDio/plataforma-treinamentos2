import styles from './index.module.css';
import logo from '../../../assets/logo.png'
import {TiThMenu} from "react-icons/ti";
import {RiCloseCircleFill} from "react-icons/ri";
import Footer from '../components/footer/Footer';

window.onscroll = function() {onscrollHeader()}

function onscrollHeader(){
if(document.documentElement.scrollTop > 499){
  if(window.innerWidth > 700){
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "fixed"
    innerHeader.style.backgroundColor = "rgb(63, 63, 63)"
  } else {
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "relative"
    innerHeader.style.backgroundColor = "transparent"
  }


} else {
  if(window.innerWidth < 700){
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "relative"
  } else{
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "sticky"
    innerHeader.style.backgroundColor = "transparent"
  }

}
}

function openSideMenu() {
  let menu = document.getElementById("mobileMenu")
  menu.style.display = 'block';


}

function closeMobileMenu() {
  let menu = document.getElementById("mobileMenu")
  menu.style.display = 'none';
}

export default function HomeLandingPage(){
  return(
    <div className={styles.LandingPage}>

    <div className={styles.mobileMenu} id="mobileMenu">
        <div className={styles.menu} id="menu">
          <div className={styles.innerMenu}>
            <ul>
              <li><a href='/pages/sobre'><p>Sobre</p></a></li>
              <li><a href='/pages/loja'><p>Treinamentos</p></a></li>
              <li><a href='/pages/contato'><p>Contato</p></a></li>
              <li><a href="/login"><button className={styles.btnOpenLoginMobile}>ENTRAR</button></a></li>
            </ul>
            <div onClick={closeMobileMenu} className={styles.closeMenu}>
              <RiCloseCircleFill />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <div id="innerHeader" className={styles.innerHeader}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>

          <div onClick={openSideMenu} className={styles.openMenuIcon}>
            <TiThMenu />
          </div>

          <div className={styles.menu}>
            <ul>
              <li><a href="/pages/sobre">Sobre</a></li>
              <li><a href="/pages/loja">Treinamentos</a></li>
              <li><a href="/pages/contato">Contato</a></li>
              <li><a href="/login"><button className={styles.btnOpenLogin}>ENTRAR</button></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsText}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi aperiam molestias veritatis! Cumque consectetur mollitia voluptate aliquid eius modi aut quo reiciendis distinctio. Reprehenderit ipsum corrupti nesciunt ipsam. Vitae.</p>
            <button>ACESSAR</button>
          </div>
          <div className={styles.image}>
          </div>
        </div>
      </div>

      <div className={styles.bodyPage}>
        <section className={styles.courses}>
          <div className={styles.title}>
            <h2>Alguns de Nossos Treinamentos</h2>
          </div>
          <div className={styles.displayCoursesContainer}>
            <div className={styles.card} id="card1">
              <div className={styles.headerCard}>
                <img src='https://ingracio.adv.br/wp-content/uploads/2021/11/equipamento-protecao-individual-epi-980x535.jpg' alt='img'></img>
              </div>
              <div className={styles.bodyCard}>
                <div className={styles.titleCard}>
                  <h2>NR 20</h2>
                </div>
                <div className={styles.detailsCard}>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repellat labore voluptatibus quod neque.</p>
                </div>
                <div className={styles.acessButton}>
                  <button>Acessar Cursos</button>
                </div>
              </div>
            </div>

            <div className={styles.card} id="card2">
              <div className={styles.headerCard}>
                <img src='https://ingracio.adv.br/wp-content/uploads/2020/09/novas-regras-epi.jpg'></img>
              </div>
              <div className={styles.bodyCard}>
                <div className={styles.titleCard}>
                  <h2>NR 20</h2>
                </div>
                <div className={styles.detailsCard}>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repellat labore voluptatibus quod neque.</p>
                </div>
                <div className={styles.acessButton}>
                  <button>Acessar Cursos</button>
                </div>
              </div>
            </div>

            <div className={styles.card} id="card3">
              <div className={styles.headerCard}>
              <img src='https://ingracio.adv.br/wp-content/uploads/aposentadoria-especial-reforma-1000x591.jpg'></img>
              </div>
              <div className={styles.bodyCard}>
                <div className={styles.titleCard}>
                  <h2>NR 20</h2>
                </div>
                <div className={styles.detailsCard}>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repellat labore voluptatibus quod neque.</p>
                </div>
                <div className={styles.acessButton}>
                  <button>Acessar Cursos</button>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <Footer />

      </div>
    </div>
  )
}