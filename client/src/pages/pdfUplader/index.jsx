
import { useRef, useState } from "react"
import Axios from "axios"

export default function PdfUploader() {

    let [file, setFile] = useState();

    const uploadFiles = () => {
        let formData = new FormData();
        formData.append("courseFile", file, file.name)

        Axios.post("http://localhost:3001/createCourse", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    return (
        <div>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={uploadFiles}>Upload</button>
        </div>
    )
}