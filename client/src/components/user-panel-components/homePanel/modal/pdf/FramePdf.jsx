import sample from "./firstlook.pdf"

export default function FramePdf() {
  return(
    <>
    <h1>PDF Example with object</h1>
      <object  data={sample} type="application/pdf" width="100%" height="100%">
      </object>
    </>
  )
}