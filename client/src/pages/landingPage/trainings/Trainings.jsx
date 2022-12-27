import styles from "./trainings.module.css";
import { IoIosArrowBack } from "react-icons/io"
import logo from "../../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import ModalTrainingPage from "./ModalTrainingPage";
import { useState, useEffect } from "react";
import cards from "./Cards";
import CardTrainingPage from "./CardTrainingPage";

export default function TrainingsPage() {
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  useEffect(_=>{
    setCard(cards)
  },[])

 

  const backPage = () => {
    navigate("/");
  }


  return (
    <>
    <div className={styles.trainingPage}>



      <div className={styles.page}>
        <div className={styles.header}>
          <div onClick={backPage} className={styles.backPage}>
            <p><IoIosArrowBack /></p>
            <p>Loja de Cursos</p>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
        <div className={styles.display}>
          
        {
          cards.map((val)=>{
            return <CardTrainingPage data={val} setTitle={setTitle} setUrlImage={setUrlImage} setDescription={setDescription} setPrice={setPrice}/>
          }) 
        }
          
        </div>
      </div>

        
      <ModalTrainingPage title={title} urlImage={urlImage} description={description} price={price}/>

    </div>
    </>
  )
}