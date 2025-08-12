const Home = () => {
    const getAge = (birthday: string) => {
        const birthDate = new Date(birthday);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) {
            age -= 1;
        }

        return age;
    };


    return (
        <main className="max-w-4xl m-auto">
            <section id="title" className="w-full relative">
                <div className="absolute inset-0 text-center flex flex-col justify-center items-center">
                    <h1>Jesse Crans</h1>
                    <p className="w-2/3 text-text-highlight">Welcome to my webpage! This is where I share who I am, what I do, and what I've worked on. You'll also find my blog with ideas and projects I am exploring.</p>
                </div>
                <img
                    className="w-full object-cover opacity-30 max-md:h-100"
                    src="/pipenikbanner.jpg"
                    alt="My cat, Pip, and me"
                />
            </section>
            <div className="py-4 px-8 flex flex-col gap-4">
                <hr />
                <section id="about" className="">
                    <h2 className="my-4">About Me</h2>
                    <img
                        src="/ikportret.jpg"
                        alt="Portrait of me"
                        className="float-right w-80 max-md:w-40 h-auto ml-4 mb-4"
                    />
                    <p className="text-justify">
                        Hi, I'm Jesse, {getAge("2002-06-02")} years old and currently based in Nijmegen, where I'm studying for my master degree in Particle- and Astrophysics at the Radboud University. During my studies, I've developed strong skills in Pyhon, including data analysis, visualzation, and machine learning, as well as other languages during my minor in Computer Science. Outside of academics, I've expanded my programming knowledge through personal projects, exploring web development with React and planning to start work on a game in the near future.
                        <br /><br />
                        I'm an ambitious person, always having a many ideas lined up. I love building and fixing things, especially if they're useful for me, my friends, or my family. That might be a website, a broken controller, a bike, or anything else that needs solving. I'm always looking for ways to make life more efficient, sometimes going a bit overboard, but seeing my efforts pay off is always a great feeling.
                    </p>
                </section>
                <hr />
                <section id="hobbies">
                    <h2 className="my-4">Hobbies</h2>
                    <img
                        src="/ikspeelbas.jpg"
                        alt="Portrait of me"
                        className="float-left w-60 max-md:w-30 h-auto mr-4 mb-4"
                    />
                    <p className="text-justify">
                        In my free time, I enjoy playing and producing music. I mainly play guitar and a bit of bass. I've released my first album some time ago and am slowly working on a second one. I also like messing around with hardware, fixing and customizing things like Joy-Cons and old 3DS consoles. When it comes to games, I often play Rocket League and League of Legends with friends, and games like Splatoon 3 and Mario Kart with my girlfriend. From time to time I like to go outside as well, mostly playing tennis, cycling or just strolling around the city of Nijmegen.
                    </p>
                </section>
                <hr />
            </div>
        </main>
    )
}

export default Home;