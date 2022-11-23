
import { useRef, useState } from "react"
import Axios from "axios"

export default function PdfUploader() {

    return (
        <div>
            <form ref={useRef('uploadForm')}
                id='uploadForm'
                action='http://localhost:3001/fileUploader'
                method='post'
                encType="multipart/form-data">
                <input type="file" name="uploadedFile" />
                <input type='submit' value='Upload!' />
            </form>
        </div>
    )
}