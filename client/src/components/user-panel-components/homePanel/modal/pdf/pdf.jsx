import React, { useState } from 'react';
import { Document, Page, pdfjs  } from 'react-pdf';
import sample from "./firstlook.pdf"
import styles from "./pdf.module.css"


//nao deletar isso por favor
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.document}>
      <Document file={sample} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className={styles.control}>
        <p>
          <p><b>próxima</b></p>
          Page {pageNumber} of {numPages}
          <p><b>anterior</b></p>
        </p>
      </div>
    </div>
  );
}