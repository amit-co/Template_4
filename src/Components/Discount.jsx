import { useState } from "react";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";


export default function Discount() {
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState("");

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    return (
        <div className="md:flex ">

            <div className=" pt-10 w-full xl:mx-28 mx-32 pb-5 md:w-full ">
                <h1 className="text-customWhite text-3xl tracking-widest ">From</h1>
                <h1 className="text-customWhite mt-3 text-3xl">£10.00</h1>
                <div className="flex flex-col mt-3">
                    <label htmlFor="input" className="text-customWhite  text-3xl">Enter amount</label>
                    <input
                        type="text"
                        id="input"
                        className="border h-12 rounded-lg mt-3 w-52 outline-none py-2 pl-3 placeholder:text-2xl"
                        placeholder="£"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>

                <div className="flex flex-col xl:flex-row text-center mx-auto">
                    <div className="flex  mt-4 items-center">
                       
                        <input
                            type="number"
                            className={`outline-none border rounded-l-lg bg-gray-300  ${quantity < 10 ? "pl-14 md:max-lg:pl-5 " : "sm:pl-7 md:max-lg:pl-5 "
                                }  text-3xl border-black py-5 w-32`}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <div className="flex flex-col bg-gray-300 py-1">
                        <button
                                className="text-4xl  justify-center "
                            onClick={() => setQuantity((prev) => prev + 1)}
                            >
                                <FaSquarePlus  />
                        </button>
                        <button
                                className="text-4xl "
                            onClick={() => {
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                            }}
                        >
                            <FaSquareMinus />
                            </button>
                            </div>
                    </div>
                    <div className="flex">
                    <button className="bg-clip-text border-white border text-2xl ml-8 tracking-widest text-white mt-6 xl:mt-4 px-6 ">
                        Add to basket
                        </button>
                        </div>
                </div>
               
            </div>
        </div>
    )
}