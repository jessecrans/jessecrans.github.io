import { useEffect, useState } from "react";
import { getContrastTextColor, getTagColor } from "../util";

const BlogPost = ({
    title,
    date,
    tags,
    htmlPath,
}: {
    title: string;
    date: string;
    tags?: string[];
    htmlPath: string;
}) => {
    const [htmlContent, setHtmlContent] = useState<string>("");

    useEffect(() => {
        fetch(htmlPath)
            .then((res) => res.text())
            .then(setHtmlContent)
            .catch(() => setHtmlContent("<p>Failed to load post.</p>"));
    }, [htmlPath]);

    return (
        <article>
            <hr className="my-4"/>
            <header className="flex justify-between items-center">
                <h3>{title}</h3>
                <time>{new Date(date).toLocaleDateString("en-GB").replaceAll("/", "-")}</time>
            </header>
            {
                tags &&
                <div className="flex gap-4 text-sm my-4">
                    {tags.map((tag) => {
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
                className=""
            />
            <hr className="mt-4"/>
        </article>
    )
}

export default BlogPost