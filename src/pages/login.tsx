import logo from "../media/icon.png";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async() => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            navigate('/main');
        }
        catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <div className="flex justify-center text-xl font-semibold space-x-1">
                <p className="">Unlock Your</p>
                <p className="border-b-4 border-green-400">Trip Script</p>
            </div>
            <div className="flex justify-center py-5">
                <button onClick={signInWithGoogle} className="flex flex-row items-center border-2 border-gray-600 rounded-full py-1 px-2 hover:bg-gray-200 transition active:scale-90">
                    <img src={logo} alt="" className="w-[30px]" />
                    <p className="mx-1">Sign up with Google</p>
                </button>
            </div>
        </div>
    )
};