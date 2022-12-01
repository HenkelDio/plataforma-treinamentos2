import sample from "./firstlook.pdf"

export default function FramePdf() {
  return(
    <>
      <iframe data={sample} type="application/pdf" width="100%" height="100%">
      </iframe>
    </>
  )
}