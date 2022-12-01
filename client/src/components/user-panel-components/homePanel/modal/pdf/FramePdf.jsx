
import Axios from "axios";
import { useEffect, useState } from "react";

export default function FramePdf(props) {
  const [pdf, setPdf] = useState(null);

  useEffect(_ => {
    const getCourse = async _ => {
      let route = `${require("../../../../../defaultRoute")}/getCourse/${props.courseId}`;
      await Axios.get(route).then(res => {
        setPdf(res.data)
      })
    }
    getCourse()
  }, [])

  return(
    <>
      <embed 
      src={pdf}
      type="application/pdf" 
      width="100%" 
      height="100%">
      </embed>
    </>
  )
}