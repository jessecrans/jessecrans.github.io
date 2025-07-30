const Home = () => (
    <>
        <section id="title" className="w-full relative">
            <div className="absolute inset-0 text-center flex flex-col justify-center items-center">
                <h1 className="text-6xl">Jesse Crans</h1>
                <p className="w-2/3">Welcome to my webpage! This is where I share who I am, what I do, and what I've worked on. You'll also find my blog with ideas and projects I am exploring.</p>
            </div>
            <img
                className="h-full w-full object-cover opacity-30"
                src="src/assets/pipenikbanner.jpg"
                alt="My cat, Pip, and me"
            />
        </section>
        <div className="py-4 px-8 flex flex-col gap-4">
            <hr className="h-2 bg-white border-0"/>
            <section id="about" className="flex gap-4">
                <div>
                    <h2 className="mb-4">About Me</h2>
                    <p>
                        Labore ex fugiat anim eu ad proident sit ipsum duis Lorem id dolore nulla consequat. Ipsum cupidatat aliqua do commodo culpa ut veniam excepteur eiusmod culpa laboris. Eiusmod reprehenderit ullamco anim dolore aute in ullamco consectetur.
                        <br /><br />
                        Mollit exercitation Lorem eiusmod enim id deserunt cillum laboris id occaecat aute. Id ut sunt incididunt mollit incididunt aliquip in eu. Sit excepteur commodo ad cupidatat elit cillum. Exercitation aute enim ipsum commodo do deserunt duis nostrud esse cillum veniam proident reprehenderit. Laboris reprehenderit duis fugiat veniam tempor dolor consequat fugiat qui elit ipsum.
                    </p>
                </div>
                <img 
                    src="src/assets/ikportret.jpg" 
                    alt="Portrait of me" 
                    className="self-start w-80"
                />
            </section>
            <hr className="h-2 bg-white border-0"/>
            <section id="hobbies" className="flex flex-row-reverse gap-4">
                <div>
                    <h2>Hobbies</h2>
                    <p>
                        Do excepteur Lorem fugiat ullamco ad amet culpa velit qui. Exercitation ullamco occaecat in nostrud amet minim cillum reprehenderit est exercitation magna ullamco. Nisi tempor magna ad laboris adipisicing fugiat adipisicing est sint qui laborum elit incididunt.
                        <br /><br />
                        Nulla ad amet proident amet eu mollit veniam ut. Exercitation fugiat esse Lorem aliquip velit Lorem esse dolore. Commodo voluptate Lorem anim aute. Et nisi reprehenderit eiusmod aliqua sint laboris elit culpa velit adipisicing occaecat. Cupidatat fugiat magna fugiat officia non pariatur nisi esse officia.
                        <br /><br />
                        Aliquip elit voluptate duis velit id ipsum ut proident cillum. Id nulla proident do consectetur reprehenderit. Occaecat cillum et ea eiusmod exercitation aliquip. Qui nisi ipsum anim incididunt et sint aute eu nostrud laboris eiusmod ullamco quis. Amet laboris labore eu aute duis labore. Exercitation fugiat excepteur adipisicing esse ea consequat nulla qui nulla est elit eiusmod ipsum. Fugiat enim proident nostrud adipisicing officia laborum irure proident.
                    </p>
                </div>
                <img 
                    src="src/assets/ikportret.jpg"
                    alt="Portrait of me" 
                    className="self-start w-80"
                />
            </section>
            <hr className="h-2 bg-white border-0"/>
        </div>
    </>
)

export default Home;