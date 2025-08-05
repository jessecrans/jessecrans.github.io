import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className="w-full text-text pb-4 text-center flex flex-col justify-center items-center">
        <ul className="flex gap-2 mb-2">
            <li><a href="https://github.com/jessecrans"><FontAwesomeIcon icon={faGithub} size="xl"/></a></li>
            <li><a href="https://www.linkedin.com/in/jesse-crans-5a3493331/">{<FontAwesomeIcon icon={faLinkedin} size="xl"/>}</a></li>
            <li><a href="mailto:jesse.crans@gmail.com"><FontAwesomeIcon icon={faAt} /></a></li>
        </ul>
        <p><FontAwesomeIcon icon={faCopyright} />2025 Jesse Crans</p>        
    </footer>
  )
}

export default Footer