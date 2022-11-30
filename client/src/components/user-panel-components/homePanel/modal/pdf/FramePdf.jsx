import sample from "./firstlook.pdf"

export default function FramePdf() {
  return(
    <>
    <h1>PDF Example with iframe</h1>
      <iframe src={sample} width="100%" height="500px">
      </iframe>
    </>
  )
}