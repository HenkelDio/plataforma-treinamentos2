
import Axios from "axios";
import { useEffect, useState } from "react";

export default function FramePdf(props) {
  const [pdf, setPdf] = useState(null);

  useEffect(_ => {
    const getCourse = async _ => {
      let route = `${require("../../../../../defaultRoute")}/getCourse/${props.courseId}`;
      await Axios.get(route).then(res => {
        const base64 = res.data.toString("base64")
        setPdf(base64)
      })
    }
    getCourse()
  }, [])

  return(
    <>
      <object 
      type="application/pdf" 
      data=""
      width="100%" 
      height="100%">
      </object>
    </>
  )
}