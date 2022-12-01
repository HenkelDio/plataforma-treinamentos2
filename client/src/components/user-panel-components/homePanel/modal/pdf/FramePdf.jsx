import sample from "./firstlook.pdf"
import Axios from "axios";
import { useEffect, useState } from "react";

export default function FramePdf(props) {
  const [pdf, setPdf] = useState(null);

  useEffect(_ => {
    const getCourse = async _ => {
      let route = `https://souzatreinamentosst.com.br:4000/getCourse/${props.courseId}`;
      await Axios.get(route).then(res => {
        console.log(res)
      })
    }
    getCourse()
  }, [])

  return(
    <>
      <object data={sample} type="application/pdf" width="100%" height="100%">
      </object>
    </>
  )
}