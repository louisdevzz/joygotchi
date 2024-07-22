'use client'
import { useEffect, useState } from "react";
import { Silkscreen as FontSilkscreen} from "next/font/google"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const Silkscreen = FontSilkscreen({
    subsets: ["latin"],
    weight:"400",
})


const Space = () =>{

    const [countSpace, setCoutSpace] = useState<number>(0);
    const [status, setStatus] = useState<string|null>(null);

    const addSpace = () =>{
        setCoutSpace(countSpace+1)
    }

    const minusSpace = () =>{
        if(countSpace > 0){
            setCoutSpace(countSpace-1)
        }
    }
    
    const onBuy = () =>{
        setStatus("BUY SUCCSEFFULL!")
        setTimeout(function(){
            setStatus(null)
        },1200)
    }

    return(
        <div className={`${Silkscreen.className} flex flex-col justify-center items-center w-full h-full bg-[#b8e3f8]`}>
            <div className="bg-[#e5f2f8] w-[390px] h-full">
                {status&&(
                    <div className="fixed z-50 bg-[#97b5d5] w-56 h-10 top-5 left-[52%] rounded-lg border-2 border-[#e5f2f8] shadow-sm transform -translate-x-1/2 transition-all delay-75">
                        <div className="flex flex-row w-full px-3 items-center h-full gap-2">
                            <img width={22} src="/assets/icon/success.svg" alt="success" />
                            <small className="text-[#2d3c53] text-sm font-semibold">{status}</small>
                        </div>
                    </div>
                )}
                <Header/>
                <div className="h-full pb-16 text-black">
                    <div className="mt-8 px-2">
                        <div className="px-3 py-2 h-16 text-black w-full flex justify-between rounded-lg border-2 border-[#2d3c53] bg-[#97b5d5] bg-opacity-40">
                            <div className="flex flex-col">
                                <span>Join to telegram</span>
                                <small>referenced</small>
                            </div>
                            <span>ID: 90000</span>
                        </div>
                        <div className="border-2 border-[#304053] shadow-sm w-full h-60 rounded-lg mt-5">
                            <div className="py-1 w-full rounded-t-md bg-[#304053] text-center">
                                <span className="text-xl text-[#fff]">NFT REWARD</span>
                            </div>
                            <div className="px-3">
                                <div className="mt-5 flex flex-row gap-5 items-center justify-between">
                                    <div className="p-3 rounded-md border-2 border-[#304053] items-center flex justify-center">
                                        <img width={90} height={90} src="/assets/animation/blackdragon/1.gif" alt="pet" />
                                    </div>
                                    <div className="border-t-2 border-[#304053] w-full text-black">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row justify-between items-center">
                                                <span className="text-[#00000075]">NAME</span>
                                                <span>DRAGON BLACK</span>
                                            </div>
                                            <div className="flex flex-row justify-between items-center">
                                                <span className="text-[#00000075]">Status</span>
                                                <span>HAPPY</span>
                                            </div>
                                            <div className="flex flex-row justify-between items-center">
                                                <span className="text-[#00000075]">TOB</span>
                                                <span>3 HOURS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 border-t-2 border-[#304053] w-full "/>
                                <div className="mt-1 flex flex-row justify-between items-center text-black">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between items-center gap-3">
                                            <span className="text-[#00000075]">POINTS</span>
                                            <span>0</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center">
                                            <span className="text-[#00000075]">LEVEL</span>
                                            <span>0</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <span className="text-[#00000075]">STAR</span>
                                            <span>0</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center gap-3">
                                            <span className="text-[#00000075]">TOD</span>
                                            <span>3h:40m:28s</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <span>Start in: 0h:00m:0s</span>
                        </div>
                        <div className="mt-3 px-3 py-2 h-full text-black w-full flex justify-between rounded-lg border-2 border-[#2d3c53] bg-[#97b5d5] bg-opacity-40">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-col gap-2 items-center">
                                    <small>100 token per space</small>
                                    <div className="flex flex-row justify-between gap-2 items-center h-10 w-full bg-[#8fa6ca] p-2 rounded-lg">
                                        <div onClick={addSpace} className="bg-[#2d3c53] rounded-full w-7 h-7 flex items-center justify-center">
                                            <img width={20} src="/assets/icon/add.svg" alt="add" />
                                        </div>
                                        <div className="w-20">
                                            <input value={countSpace&&countSpace} onChange={(e)=>setCoutSpace(Number(e.target.value))} placeholder="0" className="w-full placeholder:text-[#2d3c539c] text-2xl bg-transparent text-center text-[#2d3c53] outline-none focus:outline-none px-2 py-1" type="text" />
                                        </div>
                                        <div onClick={minusSpace} className="bg-[#2d3c53] rounded-full w-7 h-7 flex items-center justify-center">
                                            <img width={20} src="/assets/icon/minus.svg" alt="minus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <small>65 space</small>
                                    <button onClick={onBuy} className="bg-[#2d3c53] w-28 h-10 rounded-lg hover:bg-opacity-85 text-[#fff]">
                                        <span>BUY</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Space;