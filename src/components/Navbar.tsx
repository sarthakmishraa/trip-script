import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="sm:px-32 md:px-64 xl:px-96 text-lg font-semibold space-x-5 pt-2 pb-5">
            <Link to="/" className="hover:border-b-4 border-green-400">Home</Link>
            <Link to="/main" className="hover:border-b-4 border-green-400">Get Started</Link>
            <Link to="/login" className="hover:border-b-4 border-green-400">Sign In</Link>
        </nav>
    )
}