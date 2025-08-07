import { useEffect, useState } from "react";
import { getContrastTextColor, getTagColor } from "../util";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const BlogPost = () => {
    const [htmlContent, setHtmlContent] = useState<string>("");
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) return (
        <p className="text-center my-8">
            <FontAwesomeIcon icon={faWarning}/> Post not found <FontAwesomeIcon icon={faWarning}/>
        </p>
    );

    useEffect(() => {
        fetch(post.htmlPath)
            .then((res) => res.text())
            .then(setHtmlContent)
            .catch(() => setHtmlContent("<p>Failed to load post.</p>"));
    }, [post.htmlPath]);

    return (
        <article className="p-8 max-w-4xl">
            <header className="flex justify-between items-center">
                <h2>{post.title}</h2>
                <time>{new Date(post.date).toLocaleDateString("en-GB").replaceAll("/", "-")}</time>
            </header>
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
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="text-justify"
            />
        </article>
    )
}

export default BlogPost