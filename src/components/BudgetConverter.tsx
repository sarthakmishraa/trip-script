import { useState, useEffect } from "react";

export const BudgetConverter = () => {
    const [hidden, setHidden] = useState<boolean>(true);
    const [amount, setAmount] = useState<string>("");
    const [rates, setRates] = useState<{[key: string]: number}>({});
    const [budget, setBudget] = useState<number>(0);
    const [rate, setRate] = useState<number>(0);

    const getExchangeRates = async() => {
        try {
            const exchangeAPIResponse = await fetch("https://open.er-api.com/v6/latest/USD").then(res => res.json());
            setRates(exchangeAPIResponse.rates);
        }
        catch (error) {
            console.log(error);
        }
    };

    const convertAmount = () => {
        setBudget(parseInt(amount)/rate);
    }

    useEffect(()=>{
        getExchangeRates();
    }, [hidden]);

    return(
        <div className="bg-green-200 shadow-lg p-3 rounded-lg border-b-4 border-gray-400 space-x-2">
            <h1 className="font-semibold text-lg">Conversion Helper</h1>
            {hidden ? (
                <button onClick={()=>setHidden(false)} className="text-lg font-semibold cursor-pointer bg-green-500 text-white border-[2px] border-gray-400 p-1 rounded-lg hover:bg-green-200 hover:text-black" >
                    Show
                </button>
            ):(
                <div className="space-y-2">
                    <div className="space-x-2">
                        <select onChange={(event) => setRate(rates[(event.target as HTMLSelectElement).value])}>
                            <option selected disabled hidden className="border-2 border-gray-600 rounded-md h-[30px] p-1 focus:ring-4 ring-green-400" >
                                Select currency
                            </option>
                            {
                                Object.keys(rates).map((key) => (
                                    <option value={key} className="border-2 border-gray-600 rounded-md h-[30px] p-1 focus:ring-4 ring-green-400" >
                                        {key} - {rates[key]}
                                    </option>
                            ))
                            }
                        </select>
                        <input type="text" onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount" className="border-2 border-gray-600 rounded-md h-[30px] p-1 focus:ring-4 ring-black" />
                    </div>
                    <div className="space-x-2">
                        <button onClick={convertAmount} className="text-lg font-semibold cursor-pointer bg-green-200 border-[2px] border-gray-400 p-1 rounded-lg hover:bg-green-500 hover:text-white" >
                            Convert
                        </button>
                        <button onClick={() => setHidden(true)} className="text-lg font-semibold cursor-pointer bg-green-200 border-[2px] border-gray-400 p-1 rounded-lg hover:bg-green-500 hover:text-white" >
                            Hide
                        </button>
                    </div>
                    <p className="shadow-lg font-semibold text-lg">Amount: ${budget}</p>
                </div>
            )}
            
        </div>
    )
};