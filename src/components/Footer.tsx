import { Link } from "react-router-dom";

export const Footer = () => {
    return(
        <div className="flex justify-between fixed bottom-0 w-[100%] bg-green-300 sm:px-32 md:px-64 xl:px-96 flex flex-row font-semibold space-x-5 pt-2 pb-5">
            <div className="">
                <Link to="/" className="text-2xl hover:border-b-4 border-green-400">TripScript</Link>
            </div>
            <div className="">
                <p className="text-lg">My Other Projects</p>
                <div className="flex flex-row space-x-2">
                    <p>SM Social Media</p>
                    <Link to="https://github.com/sarthakmishraa/social-media-app" target="_blank" className="hover:border-b-4 border-green-400">GitHub</Link>
                    <Link to="https://sm-socialmedia.netlify.app/" target="_blank" className="hover:border-b-4 border-green-400" >Live</Link>
                </div>
                <div className="flex flex-row space-x-2">
                    <p>Career Crafter</p>
                    <Link to="https://github.com/sarthakmishraa/career-crafter" target="_blank" className="hover:border-b-4 border-green-400" >GitHub</Link>
                    <Link to="https://atsmatch.streamlit.app/" target="_blank" className="hover:border-b-4 border-green-400" >Live</Link>
                </div>
                <div className="flex flex-row space-x-2">
                    <p>SM Sec</p>
                    <Link to="https://github.com/sarthakmishraa/SM_SEC" target="_blank" className="hover:border-b-4 border-green-400" >GitHub</Link>
                    <Link to="https://smsec.netlify.app/" target="_blank" className="hover:border-b-4 border-green-400" >Live</Link>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-lg">Contact Me</p>
                    <Link to="" className="hover:border-b-4 border-green-400" >Email</Link>
                    <Link to="https://www.linkedin.com/in/sarthakmishraa/" target="_blank" className="hover:border-b-4 border-green-400" >LinkedIn</Link>
                    <Link to="https://github.com/sarthakmishraa" target="_blank" className="hover:border-b-4 border-green-400" >GitHub</Link>
                    <Link to="http://sarthakmishra.lovestoblog.com/?i=2" target="_blank" className="hover:border-b-4 border-green-400" >Portfolio</Link>
            </div>
        </div>
    )
};