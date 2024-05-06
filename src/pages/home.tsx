import img1 from "../media/img1.png"

export const Home = () => {
    return(
        <div>
            <div className="flex justify-center text-xl font-semibold space-x-1">
                <p>Turn Travel Dreams into</p>
                <p className="border-b-4 border-green-400">Trip Scripts</p>
            </div>
            <div className="flex justify-center mt-16">
                <img src={img1} alt="" className="shadow-xl border-b-2 border-gray-400 rounded-xl w-[1000px]" />
            </div>
        </div>
    )
};