import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, type IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { getContrastTextColor, getTagColor } from "../util";

const icons: Record<string, IconDefinition> = {
    "website": faGlobe,
    "github": faGithub,
    "download": faDownload,
}

const ExperienceCard = ({
    title,
    context,
    image,
    tech,
    children,
    links,
}: {
    title: string,
    context: string,
    image?: string,
    tech: string[],
    children: ReactNode,
    links: Record<string, string>
}) => {
    return (
        <div className="bg-background shadow rounded border-1 p-8 flex justify-between gap-2">
            <div className="flex flex-col gap-4">

                {/* TITLE and SUBTITLE */}
                <h3>{title}</h3>
                <p className="text-text-muted italic text-sm">{context}</p>

                {/* DESCRIPTION */}
                <div>{children}</div>

                {/* TECH TAGS */}
                <div className="flex gap-4 text-sm">
                    {
                        tech.map((tag) => {
                            const tagColor = getTagColor(tag);
                            const textColor = getContrastTextColor(tagColor);
                            return (
                                <div
                                    style={{ "backgroundColor": tagColor, "color": textColor }}
                                    className="p-1 rounded shadow bg-primary text-sm"
                                >
                                    {tag}
                                </div>
                            )
                        })
                    }
                </div>

                {/* LINKS */}
                <div className="flex gap-2">
                    {
                        Object.entries(links).map(([label, url]) => (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={label === "download"}
                            >
                                <FontAwesomeIcon icon={icons[label] ?? faLink} size="xl" />
                            </a>
                        )
                        )}
                </div>

            </div>
            <div>
                {image ?
                    <img
                        src={image}
                        alt={`${title} image`}
                        className="w-40 h-40 aspect-square"
                    /> : ''
                }
            </div>
        </div>
    )
}

export default ExperienceCard