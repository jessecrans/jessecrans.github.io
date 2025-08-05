import { faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Blog = () => {
  return (
    <main className="p-8 max-w-4xl m-auto">
      <h2 className="text-center">Blog</h2>
      <section>
        <p className="text-center"><FontAwesomeIcon icon={faWarning} /> Under Construction <FontAwesomeIcon icon={faWarning}/></p>
      </section>
    </main>
  )
}

export default Blog