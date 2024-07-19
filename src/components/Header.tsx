'use client'
import { useState } from "react";
import { Silkscreen as FontSilkscreen} from "next/font/google"
import CountDownTimer from "@/components/CountDownTimer";
import { HereWallet } from "@here-wallet/core";

const Silkscreen = FontSilkscreen({
    subsets: ["latin"],
    weight:"400",
})

const Header = () =>{
    const [account,setAccount] = useState<string|null>(null);
    const namePet = localStorage.getItem("namePet")??"-";
    const seconds = Number(localStorage.getItem("seconds"))??0;

    const instantSignin = async () => {
        const here = await HereWallet.connect();
        const account = await here.signIn({ contractId: "social.near" });
        console.log(`Hello ${account}!`);
    };
    const truncateString = (str: string)=>{
        const format = str.replace(".near","");
        if(format.length > 6) return format.slice(0,2)+'...'+format.slice(-2)+".near";
        return format+".near"
    }
    return(
        <div className="border-b border-gray-300 h-20 w-full bg-[#2d3c53] relative">
            <div className="flex flex-row justify-between px-2 py-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2">
                        <img width={25} src="/assets/item/coin.png" alt="coin" />
                        <p className="text-[#fff]">0.01</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img width={25} src="/assets/item/credit_card.png" alt="coin" />
                        <p className="text-[#fff]">19000</p>
                    </div>
                </div>
                <p className="text-[#fff] mt-2 ml-5">{namePet}</p>
                <div className="flex flex-row gap-4 mt-5 items-center">
                {
                    account?(
                    <div className="px-2 py-0.5 h-8 rounded-full bg-[#a9c6e4]">
                        <small className="">{truncateString("justonly.near")}</small>
                    </div>
                    ):(
                    <button onClick={instantSignin} className="px-2 h-8 rounded-full bg-[#a9c6e4]">
                        <small className="font-semibold">Connect</small>
                    </button>
                    )
                }
                </div>
            </div>
            <div className="px-3 py-2 w-[150px] rounded-full text-center absolute top-2/3 left-1/3  h-10 bg-[#f48f59]">
                {/* <span>0h:57m:35s</span> */}
            <CountDownTimer seconds={seconds}/>
            </div>
        </div>
    )
}

export default Header;