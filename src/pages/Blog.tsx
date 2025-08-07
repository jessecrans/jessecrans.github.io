import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";
import { getContrastTextColor, getTagColor } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <main className="p-8 max-w-4xl m-auto">
      <h2 className="text-center mb-8">Blog</h2>
      
      {/* SEARCH BAR IN THE FUTURE */}
      {/* <form>
        <input 
          type="text"
          name="Blog post query"
          placeholder="Search for a blog post..."
        />
        <button
          type="submit"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form> */}

      {/* LIST OF BLOG POSTS */}
      <div className="flex flex-col gap-4">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`}>
            <div className="border-2 border-text rounded p-4 bg-background hover:bg-background-soft transition">

              {/* TITLE AND DATE */}
              <div className="flex justify-between items-center">
                <h3>{post.title}</h3>
                <time>{new Date(post.date).toLocaleDateString("en-GB").replaceAll("/", "-")}</time>
              </div>

              {/* TAGS */}
              {
                post.tags &&
                <div className="flex gap-4 text-sm my-4">
                  {post.tags.map((tag) => {
                    const tagColor = getTagColor(tag);
                    const textColor = getContrastTextColor(tagColor);
                    return (
                      <div
                        style={{ "backgroundColor": tagColor, "color": textColor }}
                        className="p-1 rounded shadow bg-primary text-sm"
                        key={tag}
                      >
                        {tag}
                      </div>
                    )
                  })}
                </div>
              }
              
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Blog