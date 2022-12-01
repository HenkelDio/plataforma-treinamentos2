
import Axios from "axios";
import { useEffect, useState } from "react";

export default function FramePdf(props) {
  const [pdfInfo, setPdfInfo] = useState(null);

  useEffect(_ => {
    const getCourse = async _ => {
      let route = `${require("../../../../../defaultRoute")}/getCourse/${props.courseId}`;
      await Axios.get(route).then(res => {
        if (res) {
          setPdfInfo(res.data)
        }
      })
    }
    getCourse()
  }, []);

  return(
    <>
      <iframe src={`https://souzatreinamentosst.com.br:4000/${pdfInfo.courseDir}/${pdfInfo.coursePdf}`} type="application/pdf" width="100%" height="100%" />
    </>
  )
}