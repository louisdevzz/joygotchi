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
                        <Link href={"/space"} className="pl-3 py-2 h-16 w-full flex justify-between rounded-lg border-2 border-[#2d3c53] bg-[#97b5d5] bg-opacity-40 hover:bg-opacity-85 items-center">
                            <div className="flex flex-col text-black">
                                <span>Join to telegram</span>
                                <small>0h:0m:0s</small>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </Link>
                        <div className="pl-3 py-2 h-16 w-full flex justify-between rounded-lg border-2 border-[#2d3c53] bg-[#97b5d5] bg-opacity-40 hover:bg-opacity-85 items-center">
                            <div className="flex flex-col text-black">
                                <span>Join to telegram</span>
                                <small>0h:0m:0s</small>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="pl-3 py-2 h-16 w-full flex justify-between rounded-lg border-2 border-[#2d3c53] bg-[#97b5d5] bg-opacity-40 hover:bg-opacity-85 items-center">
                            <div className="flex flex-col text-black">
                                <span>Join to telegram</span>
                                <small>0h:0m:0s</small>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="pl-3 py-2 h-16 w-full flex justify-between rounded-lg border-2 border-[#2d3c53] bg-[#97b5d5] bg-opacity-40 hover:bg-opacity-85 items-center">
                            <div className="flex flex-col text-black">
                                <span>Join to telegram</span>
                                <small>0h:0m:0s</small>
                            </div>
                            <div className="h-8 w-8 mt-2">
                                <img width={14} src="/assets/icon/arrow_right.png" alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Mission;