import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

export const Main = () => {
    const [budget, setBudget] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [transportation, setTransportation] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [fromDay, setFromDay] = useState<string>("");
    const [fromMonth, setFromMonth] = useState<string>("");
    const [fromYear, setFromYear] = useState<string>("");
    const [toDay, setToDay] = useState<string>("");
    const [toMonth, setToMonth] = useState<string>("");
    const [toYear, setToYear] = useState<string>("");


    const apikey:string = process.env.REACT_APP_apikey!;
    const genAI = new GoogleGenerativeAI(apikey);


    const getResponse = async () => {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = `
            I know you're a LLM but you have to act like a experienced travel guide.\
            I will provide you budget, destination, travel dates, mode of transportation \
            and you have to tell travel itenary. Please find the information below: \
            budget: ${budget}\
            destination: ${destination}\
            travel dates from: ${"".concat(fromMonth, " ", fromDay, " ", fromYear)}\
            travel dates to: ${"".concat(toMonth, " ", toDay, " ", toYear)}\
            mode of transportation: ${transportation}\
            `;

            setLoading(true);
            const result = await model.generateContent(prompt);
            const response = result.response;
            setText(response.text());
        }
        catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="sm:px-32 md:px-64 xl:px-96 space-y-[20px] space-x-2 text-center">
            <h1 className="text-xl">Welcome to TripScript, your personalized travel planner! To craft your ideal itinerary, please provide:</h1>

            <div className="xl:flex flex-row space-y-2 space-x-2">
                <h1 className="text-semibold text-lg">Budget (in your currency)</h1>
                <input type="text" placeholder="Enter your budget" onChange={(e) => setBudget(e.target.value)} className="border-2 border-gray-600 rounded-md h-[30px] p-1" />
                <h1 className="text-semibold text-lg">Going from</h1>
                <input type="text" placeholder="Enter your current location" onChange={(e) => setDestination(e.target.value)} className="border-2 border-gray-600 rounded-md h-[30px] p-1" />
                <h1 className="text-semibold text-lg">Going to</h1>
                <input type="text" placeholder="Enter your destination" onChange={(e) => setDestination(e.target.value)} className="border-2 border-gray-600 rounded-md h-[30px] p-1" />
            </div>
            
            <div className="xl:flex flex-row items-center space-y-2 space-x-2">
                <h1>Travel Dates</h1>
                <select id="from-month" onChange={ (event) => setFromMonth(event.target.value) } className="border-2 border-gray-600 rounded-md p-1" >
                    <option value={0} disabled selected>Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
                <select id="from-day" onChange={ (event) => setFromDay(event.target.value) } className="border-2 border-gray-600 rounded-md p-1" >
                    <option value={0} disabled selected>Day</option>
                    <option value={1}>01</option>
                    <option value={2}>02</option>
                    <option value={3}>03</option>
                    <option value={4}>04</option>
                    <option value={5}>05</option>
                    <option value={6}>06</option>
                    <option value={7}>07</option>
                    <option value={8}>08</option>
                    <option value={9}>09</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                </select>
                <select id="from-year" onChange={ (event) => setFromYear(event.target.value) } className="border-2 border-gray-600 rounded-md p-1" >
                    <option value={0} disabled selected>Year</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                </select>
                <h1>To</h1>
                <select id="to-month" onChange={ (event) => setToMonth(event.target.value) } className="border-2 border-gray-600 rounded-md p-1" >
                    <option value={0} disabled selected>Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
                <select id="to-day" onChange={ (event) => setToDay(event.target.value) } className="border-2 border-gray-600 rounded-md p-1" >
                    <option value={0} disabled selected>Day</option>
                    <option value={1}>01</option>
                    <option value={2}>02</option>
                    <option value={3}>03</option>
                    <option value={4}>04</option>
                    <option value={5}>05</option>
                    <option value={6}>06</option>
                    <option value={7}>07</option>
                    <option value={8}>08</option>
                    <option value={9}>09</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                </select>
                <select id="to-year" onChange={ (event) => setToYear(event.target.value) } className="border-2 border-gray-600 rounded-md p-1" >
                    <option value={0} disabled selected>Year</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                </select>
            </div>

            <div className="space-y-2 space-x-2">
                <h1 className="text-lg">Mode of transportation</h1>
                <fieldset className="flex flex-row justify-center space-x-5">
                    <legend>Select Mode of transportation</legend>
                    <div className="flex flex-col">
                        <input type="radio" id="flight" value="flight" name="transportation" onChange={ (event) => setTransportation(event.target.value) } className="w-6 h-6 ring-inset focus:ring-4 ring-green-600" />
                        <label htmlFor="flight">Flight</label>
                    </div>
                    <div className="flex flex-col">
                        <input type="radio" id="train" value="train" name="transportation" onChange={ (event) => setTransportation(event.target.value) } className="w-6 h-6 ring-inset focus:ring-4 ring-green-600" />
                        <label htmlFor="train">Train</label>
                    </div>
                    <div className="flex flex-col">
                        <input type="radio" id="car" value="car" name="transportation" onChange={ (event) => setTransportation(event.target.value) } className="w-6 h-6 ring-inset focus:ring-4 ring-green-600" />
                        <label htmlFor="car">Car</label>
                    </div>
                </fieldset>
            </div>
            <input type="submit" onClick={getResponse} className="text-lg font-semibold cursor-pointer bg-green-200 border-[2px] border-gray-400 p-1 rounded-lg hover:bg-green-500 hover:text-white" />
            {
                loading && (
                    text ? (
                        <p>{ text }</p>
                    ):(
                        <p>Loading...</p>
                    )
                )
            }
        </div>
    )
}