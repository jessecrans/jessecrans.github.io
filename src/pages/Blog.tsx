import BlogPost from "../components/BlogPost";
import blogPosts from "../data/blogPosts.json";

const Blog = () => {
  return (
    <main className="p-8 max-w-4xl m-auto">
      <h2 className="text-center">Blog</h2>
      <div>
        {blogPosts.map((post) => (
          <div key={post.title}>
            <BlogPost 
              title={post.title}
              date={post.date}
              tags={post.tags}
              htmlPath={post.htmlPath}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Blog