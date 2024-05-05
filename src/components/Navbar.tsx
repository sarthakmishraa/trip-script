import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signOutUser = async() => {
        await signOut(auth);
    }

    return(
        <div className="flex justify-around">
            <nav className="sm:px-16 md:px-32 xl:px-64 text-lg font-semibold space-x-5 pt-2 pb-5">
                <Link to="/" className="hover:border-b-4 border-green-400 focus:border-b-4 border-green-400">Home</Link>
                {
                    user? (
                        <Link to="/main" className="hover:border-b-4 border-green-400 focus:border-b-4 border-green-400">Get Started</Link>
                    ):(
                        <Link to="/login" className="hover:border-b-4 border-green-400 focus:border-b-4 border-green-400">Get Started</Link>
                    )
                }
            </nav>
            <nav className="sm:px-16 md:px-32 xl:px-64 text-lg font-semibold space-x-5 pt-2 pb-5">
                {
                    user ? (
                        <Link to="/" onClick={signOutUser} className="hover:border-b-4 border-green-400">Sign Out</Link>
                    ):(
                        <Link to="/login" className="hover:border-b-4 border-green-400 focus:border-b-4 border-green-400">Sign In</Link>
                    )
                }
            </nav>
        </div>
    )
}