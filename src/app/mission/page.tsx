'use client'
import { useEffect, useState } from "react";
import { Silkscreen as FontSilkscreen} from "next/font/google"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";


const Silkscreen = FontSilkscreen({
    subsets: ["latin"],
    weight:"400",
})


const Mission = () =>{
    return(
        <div className={`${Silkscreen.className} flex flex-col justify-center items-center w-full h-full bg-[#b8e3f8]`}>
            <div className="bg-[#e5f2f8] md:w-[390px] h-full">
                <Header/>
                <div className="h-full pb-52">
                    <div className="mt-8 px-2 flex flex-col gap-3">
                        <Link href={"/space"} className="pl-3 py-2 h-20 w-full flex justify-between rounded-lg border-2 border-[#6251A2] bg-[#6251A2] bg-opacity-25 hover:bg-opacity-35 items-center">
                            <div>
                                <img width={45} src="/assets/icon/diamond.svg" alt="diamond" />
                            </div>
                            <div className="flex flex-col text-black gap-2">
                                <span>Peacekeepers</span>
                                <small>Battle 4 weeks</small>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="border border-[#6251A2] flex items-center text-center justify-center rounded-full px-2">
                                    <small className="text-[#6251A2]">Starting</small>
                                </div>
                                <div className="bg-[#6251A2] bg-opacity-55 flex flex-row gap-1 px-2 py-1 rounded-full">
                                    <img src="/assets/icon/ethereum.svg" alt="ethereum" />
                                    <small className="text-black">45.000</small>
                                </div>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </Link>
                        <Link href={"/space"} className="pl-3 py-2 h-20 w-full flex justify-between rounded-lg border-2 border-[#EBC351] bg-[#EBC351] bg-opacity-20 hover:bg-opacity-35 items-center">
                            <div>
                                <img width={45} src="/assets/icon/gold.svg" alt="gold" />
                            </div>
                            <div className="flex flex-col text-black gap-2">
                                <span>Peacekeepers</span>
                                <small>Battle 4 weeks</small>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="border border-[#EBC351] text-center justify-center flex items-center rounded-full px-2">
                                    <small className="text-[#c29720]">Close</small>
                                </div>
                                <div className="bg-[#EBC351] bg-opacity-75 flex flex-row gap-1 px-2 py-1 rounded-full">
                                    <img src="/assets/icon/ethereum.svg" alt="ethereum" />
                                    <small className="text-black">45.000</small>
                                </div>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </Link>
                        <Link href={"/space"} className="pl-3 py-2 h-20 w-full flex justify-between rounded-lg border-2 border-[#C0C0C0] bg-[#C0C0C0] bg-opacity-25 hover:bg-opacity-35 items-center">
                            <div>
                                <img width={45} src="/assets/icon/star.svg" alt="star" />
                            </div>
                            <div className="flex flex-col text-black gap-2">
                                <span>Peacekeepers</span>
                                <small>Battle 4 weeks</small>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="border border-[#C0C0C0] flex items-center text-center justify-center rounded-full px-2">
                                    <small className="text-[#C0C0C0]">Starting</small>
                                </div>
                                <div className="bg-[#C0C0C0] bg-opacity-55 flex flex-row gap-1 px-2 py-1 rounded-full">
                                    <img src="/assets/icon/ethereum.svg" alt="ethereum" />
                                    <small className="text-black">45.000</small>
                                </div>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </Link>
                        <Link href={"/space"} className="pl-3 py-2 h-20 w-full flex justify-between rounded-lg border-2 border-[#CD7F32] bg-[#CD7F32] bg-opacity-25 hover:bg-opacity-35 items-center">
                            <div>
                                <img width={45} src="/assets/icon/bronze.svg" alt="bronze" />
                            </div>
                            <div className="flex flex-col text-black gap-2">
                                <span>Peacekeepers</span>
                                <small>Battle 4 weeks</small>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="border border-[#CD7F32] flex items-center text-center justify-center rounded-full px-2">
                                    <small className="text-[#CD7F32]">Starting</small>
                                </div>
                                <div className="bg-[#CD7F32] bg-opacity-55 flex flex-row gap-1 px-2 py-1 rounded-full">
                                    <img src="/assets/icon/ethereum.svg" alt="ethereum" />
                                    <small className="text-black">45.000</small>
                                </div>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </Link>
                        
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Mission;