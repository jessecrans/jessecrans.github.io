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
                >
                    <p className="text-justify">
                        For my bachelor thesis I performed large scale <em>data analysis</em> on archival data from the Chandra x-ray satellite, with the goal of finding Fast X-ray Transients (FXTs) hidden amongst the data. Using the algorithm from <a href="https://www.aanda.org/articles/aa/full_html/2023/07/aa45912-23/aa45912-23.html" target="_blank" className="underline">Quirola-Vásquez et al. 2022</a>, which I adapted and improved to fit my specific goals, I managed to find 50 FXT candidates of which 20 had been confirmed by previous work.
                        <br /><br />
                        During my internship I worked extensively with Python and more specifically the data handling framework Pandas, as well as with various APIs for retrieving the vast amounts of data needed to classify and verify the FXT candidates.
                    </p>
                </ExperienceCard>
            </div>
        </section>
        <section>
            <h2 className="my-8 text-center">Other Work</h2>
            <div className="flex flex-col gap-8">
                <ExperienceCard
                    title="Python Chess Engine"
                    context="side-project"
                    tech={["Python", "Pygame"]}
                    links={{
                        "github": "https://github.com/jessecrans/PyChess5",
                    }}
                >
                    <p className="text-justify">
                        I built a chess engine in Python using the Pygame library. It is a simple min-maxing type engine, primarly based on piece value, with some additional heatmaps for general piece placement guidance. I would estimate it to be around the 700-800 ELO range.
                        <br /><br />
                        Working on this project taught me how to structure such a large codebase; implement logic efficiently to maximise performance; and debug thoroughly to ensure the game functioning correctly.
                    </p>
                </ExperienceCard>
                <ExperienceCard
                    title="Pizza Golf Maandag"
                    context="side-project"
                    tech={["React", "Next.js", "TailwindCSS"]}
                    links={{
                        "website": "https://pizza-golf-maandag.vercel.app/",
                        "github": "https://github.com/jessecrans/pizza-golf-maandag",
                    }}
                >
                    I built a website to track stats for my friend and I's gaming nights, specifically for the game Golf With Your Friends. It contains per hole walkthroughs and rankings, and per player stats such as average score, number of wins, and all time best score.
                    <br /><br />
                    Working on this project thaught me the basics of the <em>React</em> and <em>Next.js</em>, as well as designing a responsive website using <em>TailwindCSS</em>.
                </ExperienceCard>
            </div>
        </section>
    </main>
)

export default Experience;
