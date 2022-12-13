import styles from './index.module.css';
import logo from '../../assets/logo.png'

window.onscroll = function() {onscrollHeader()}

function onscrollHeader(){
  if(document.documentElement.scrollTop > 600){
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "fixed"
    innerHeader.style.backgroundColor = "rgb(63, 63, 63)"

    let card1 = document.getElementById("card1")
    card1.style.opacity = 1;
    card1.style.left = 0;
    let card2 = document.getElementById("card2")
    card2.style.opacity = 1;
    card2.style.left = 0;
    let card3 = document.getElementById("card3")
    card3.style.opacity = 1;
    card3.style.left = 0;

  } else {
    let innerHeader = document.getElementById("innerHeader")
    innerHeader.style.position = "sticky"
    innerHeader.style.backgroundColor = "transparent"
  }
}
  

export default function LandingPage(){
  return(
    <div className={styles.LandingPage}>

      <div className={styles.mobileMenu}>
        <div className={styles.menu}>
          <div className={styles.innerMenu}>
            <div className={styles.logo}>
              <img src={logo}></img>
            </div>
            <ul>
              <li>Sobre</li>
              <li>Treinamentos</li>
              <li>Contato</li>
              <li><a href="/login"><button className={styles.btnOpenLogin}>ENTRAR</button></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <div id="innerHeader" className={styles.innerHeader}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>
          <div className={styles.menu}>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Treinamentos</a></li>
              <li><a href="#">Contato</a></li>
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
                <img src='https://ingracio.adv.br/wp-content/uploads/2021/11/equipamento-protecao-individual-epi-980x535.jpg'></img>
              </div>
              <div className={styles.bodyCard}>
                <div className={styles.titleCard}>
                  <h2>NR 20</h2>
                </div>
                <div className={styles.detailsCard}>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repellat labore voluptatibus quod neque.</p>
                </div>
                <div className={styles.acessButton}>
                  <button>Acessar Curso</button>
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
                  <button>Acessar Curso</button>
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
                  <button>Acessar Curso</button>
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

      </div>
    </div>
  )
}