import { Link, useLocation } from "react-router-dom";

export const Response = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const text = queryParams.get("text");
    let res;

    if(text) {
        res = text.split("**");
    }

    return(
        <div className="px-16 font-semibold space-y-2">
            <h1 className="text-2xl">Response: </h1>
            <p className="text-lg space-y-5">
                { res?.map((temp) => (
                    temp.length < 20 ? (
                        <p className="border-b-4 border-green-400">{temp}</p>
                    ):(
                        <p>{temp}</p>
                    )
                )) }
            </p>
            
            <div>
                <Link to="/main" className="text-lg font-semibold cursor-pointer bg-green-200 border-[2px] border-gray-400 p-1 rounded-lg hover:bg-green-500 hover:text-white">
                    Generate Again
                </Link>
            </div>
        </div>
    )
};