import styles from "./header.module.css"
import { MdArrowDropDownCircle } from 'react-icons/md'
import { BsArrowBarRight } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

function Header(){

    function animateArrow(){
        
        let MdArrowDropDownCircle = document.querySelector('.MdArrowDropDownCircle')
        
        let logoutContainer = document.querySelector('.logout-container')

        if(logoutContainer.classList.contains('features-show')){
            MdArrowDropDownCircle.style.transform = "rotate(0deg)"
            logoutContainer.classList.remove('features-show')
        } else {
            MdArrowDropDownCircle.style.transform = "rotate(180deg)"
            logoutContainer.classList.add('features-show')
        }
    }

    function openSideMenu(){
        document.querySelector(".side-menu").style.display = 'block'
    }
    
    function closeSideMenu(){
        document.querySelector(".side-menu").style.display = 'none'
    }

    return(
        <header className={styles.header}>

            <div className={styles.sideMenu}>
                <div className='inner-side-menu'>
                <div onClick={closeSideMenu} class="close-menu-mobile">
                    <h1><AiOutlineClose /></h1>
                </div>
                <div className={styles.gretingsSideMenu}>
                    <h2>Olá, Souza</h2>
                </div>
                <div className={styles.featuresSideMenu}>
                        <ul className={styles.features}>
                            <li><a href="/criar">Criar</a></li>
                            <li><a href="/contas">Contas</a></li>
                            <li><a href="/contas">Configurações</a></li>
                        </ul>
                    </div>
                    <div className={styles.logoutSideMenu}>
                    <p>Sair <BsArrowBarRight /></p>
                </div>
                </div>
                
            </div>

            <div className={styles.innerHeader}>
                <div className="logo">
                    <h2>Training</h2>
                </div>
                <div onClick={openSideMenu} class={styles.iconMenuMobile}>
                    <h1><GiHamburgerMenu /></h1>
                </div>
                <div className={styles.infoHeader}>
                    <div className="greetings-header">
                        <p>Olá, Souza</p><p onClick={()=>{animateArrow()}} className='MdArrowDropDownCircle'><MdArrowDropDownCircle /></p>
                        <div className={styles.logoutContainer}>
                            <p>Sair <BsArrowBarRight /></p>
                        </div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.featuresHeader}>
                        <ul className={styles.features}>
                            <li><a href="/">Criar</a></li>
                            <li><a href="/">Contas</a></li>
                            <li><a href="/">Configurações</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;