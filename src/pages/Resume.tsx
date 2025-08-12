import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <main className="p-8 max-w-4xl m-auto flex flex-col items-center gap-4">
      <a
        href="/JLCrans_CV_NL.pdf" 
        download 
        target="_blank" 
        className="bg-background hover:bg-background-soft p-4 rounded"
      >
        Resume (Dutch) <FontAwesomeIcon icon={faDownload} /> 
      </a>
      {/* <a className="bg-background hover:bg-background-soft p-4 rounded">Resume (English)</a> */}
    </main>
  )
}

export default Resume;