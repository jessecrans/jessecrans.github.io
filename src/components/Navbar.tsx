import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="sticky top-0 w-full p-4 bg-background text-text  z-10 flex justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/blog">Blog</Link>
        </div>
    </nav>
);

export default Navbar;