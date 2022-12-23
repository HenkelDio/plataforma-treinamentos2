import styles from './index.module.css';
import logo from '../../../assets/logo.png'
import HeaderLandingPage from '../components/header/HeaderLandingPage';

window.onscroll = function() {onscrollHeader()}



function onscrollHeader(){
  console.log(document.documentElement.scrollTop )
  if(document.documentElement.scrollTop > 499){
    let card1 = document.getElementById("card1")
    card1.style.opacity = 1;
    card1.style.left = 0;
    let card2 = document.getElementById("card2")
    card2.style.opacity = 1;
    card2.style.left = 0;
    let card3 = document.getElementById("card3")
    card3.style.opacity = 1;
    card3.style.left = 0;  
  }
}
  

export default function HomeLandingPage(){
  return(
    <div className={styles.LandingPage}>

      <HeaderLandingPage />

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

        <section className={styles.contact}>
          <div className={styles.contactContainer}>
            <div className={styles.logo}>
              <img src={logo}></img>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.contactUsButton}>
              <button>ENTRE EM CONTATO</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}