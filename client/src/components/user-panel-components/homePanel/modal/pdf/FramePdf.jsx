
import { useEffect, useState } from "react";

export default function FramePdf(props) {
  
  const { pdfInfo } = props

  return( pdfInfo ? 
    <> 
      <iframe src={`https://souzatreinamentosst.com.br:4000/${pdfInfo.courseDir}/${pdfInfo.coursePdf}`} type="application/pdf" width="100%" height="100%" />
    </> : <></>
  )
}