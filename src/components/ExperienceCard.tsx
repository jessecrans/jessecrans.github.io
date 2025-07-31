import type { ReactNode } from "react"

const colorMapper = (tag: string) => {
    tag = "";
    return "red-500";
}

const ExperienceCard = ({
    title,
    image,
    tags,
    children
}: {
    title: string,
    image: string,
    tags: string[],
    children: ReactNode,
}) => {
    return (
        <div className="bg-neutral-400 text-black shadow rounded p-4 flex gap-4">
            <img
                src={image}
                alt={`${title} image`}
                className="w-60 aspect-square"
            />
            <div className="flex flex-col gap-2">
                <h2>{title}</h2>
                <div className="flex gap-4">
                    {
                        tags.map((tag) =>
                            <div
                                style={{ backgroundColor: "red" }}
                                className="p-1 rounded shadow text-white"
                            >
                                {tag}
                            </div>
                        )
                    }
                </div>
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard