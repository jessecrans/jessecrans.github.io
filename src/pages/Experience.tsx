import ExperienceCard from "../components/ExperienceCard";

const Experience = () => (
    <main className="p-8 max-w-4xl m-auto">
        <section>
            <h2 className="mb-8 text-center">Thesis</h2>
            <div className="flex flex-col gap-8">
                <ExperienceCard
                    title="Searching for Extragalactic Fast X-ray Transients in the Chandra Data Archive"
                    context="Bachelor Physics and Astronomy - 2024"
                    tech={["Python", "Pandas", "APIs"]}
                    links={{
                        "download": "public/Finding_FXTs.pdf",
                        "github": "https://github.com/jessecrans/bachelor-internship"
                    }}
                    htmlPath="./experiences/thesis.html"
                />
            </div>
        </section>
        <section>
            <h2 className="my-8 text-center">Other Work</h2>
            <div className="flex flex-col gap-8">
                <ExperienceCard
                    title="Game-Night Stat-Tracking Website"
                    context="side-project"
                    tech={["React", "Next.js", "TailwindCSS"]}
                    links={{
                        "website": "https://pizza-golf-maandag.vercel.app/",
                        "github": "https://github.com/jessecrans/pizza-golf-maandag",
                    }}
                    htmlPath="./experiences/pizza-golf-maandag.html"
                />
                <ExperienceCard
                    title="Python Chess Engine"
                    context="side-project"
                    tech={["Python", "Pygame"]}
                    links={{
                        "github": "https://github.com/jessecrans/PyChess5",
                    }}
                    htmlPath="./experiences/python-chess-engine.html"
                />
            </div>
        </section>
    </main>
)

export default Experience;
