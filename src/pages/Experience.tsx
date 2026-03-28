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
                    title="Make A Choice"
                    context="side-project"
                    tech={["Astro", "Svelte", "TailwindCSS"]}
                    links={{
                        "website": "https://jessecrans.github.io/make-a-choice/",
                        "github": "https://github.com/jessecrans/make-a-choice",
                    }}
                    htmlPath="./experiences/make-a-choice.html"
                />
                <ExperienceCard
                    title="Pizza Golf Maandag"
                    context="side-project"
                    tech={["React", "Next.js", "TailwindCSS"]}
                    links={{
                        "website": "https://pizza-golf-maandag.vercel.app/",
                        "github": "https://github.com/jessecrans/pizza-golf-maandag",
                    }}
                    htmlPath="./experiences/pizza-golf-maandag.html"
                />
                <ExperienceCard
                    title="Online TicTacToe"
                    context="side-project"
                    tech={["React", "Next.js", "Firebase"]}
                    links={{
                        "website": "https://nextjs-firebase-game-test.vercel.app/",
                        "github": "https://github.com/jessecrans/nextjs-firebase-game-test",
                    }}
                    htmlPath="./experiences/online-tictactoe.html"
                />
                <ExperienceCard
                    title="ToDo Lists"
                    context="side-project"
                    tech={["React", "Next.js", "Firebase"]}
                    links={{
                        "website": "https://crud-nextjs-firebase.vercel.app/",
                        "github": "https://github.com/jessecrans/crud-nextjs-firebase",
                    }}
                    htmlPath="./experiences/crud-todo.html"
                />
                <ExperienceCard
                    title="Pokerchips Tracker"
                    context="side-project"
                    tech={["React", "CSS", "Vite"]}
                    links={{
                        "website": "https://jessecrans.github.io/PokerChips/",
                        "github": "https://github.com/jessecrans/PokerChips",
                    }}
                    htmlPath="./experiences/chip-tracker.html"
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
