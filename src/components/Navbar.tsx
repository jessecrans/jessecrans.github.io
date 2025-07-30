import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="sticky top-0 w-full bg-neutral-800 shadow z-10 p-4 flex gap-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/thesis">Thesis</Link>
        <Link to="/blog">Blog</Link>
    </nav>
);

export default Navbar;