import ExperienceCard from "../components/ExperienceCard";

const Experience = () => (
    <div className="p-8 flex flex-col gap-4">
        <h1 className="text-6xl">Experience</h1>
        <ExperienceCard
            title="Python Chess Engine"
            image="src/assets/ikportret.jpg"
            tags={["Python", "Games"]}
        >
            I built a chess engine in Python using the Pygame library.
        </ExperienceCard>
        <ExperienceCard
            title="Pizza Golf Maandag"
            image="src/assets/ikportret.jpg"
            tags={["Webdev", "Next.js", "TailwindCSS", "Responsivity"]}
        >
            I built a website to track stats for my friend and I's gaming nights.
        </ExperienceCard>
    </div>
)

export default Experience;
