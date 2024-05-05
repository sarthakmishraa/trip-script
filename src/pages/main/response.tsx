import { useLocation } from "react-router-dom";

export const Response = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const text = queryParams.get("text");

    return(
        <div className="px-16 font-semibold space-y-2">
            <h1 className="text-2xl">Response: </h1>
            <p className="text-lg border-y-4 border-green-400">{ text }</p>
        </div>
    )
};