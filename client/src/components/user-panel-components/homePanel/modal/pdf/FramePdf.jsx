
import Axios from "axios";
import { useEffect, useState } from "react";

export default function FramePdf(props) {
  const [pdf, setPdf] = useState(null);

  useEffect(_ => {
    const getCourse = async _ => {
      let route = `${require("../../../../../defaultRoute")}/getCourse/${props.courseId}`;
      await Axios.get(route).then(res => {
        
      })
    }
    getCourse()
  }, []);

  return(
    <>
      <iframe src={"https://souzatreinamentosst.com.br:4000/javascript.pdf"} type="application/pdf" width="100%" height="100%" />
    </>
  )
}