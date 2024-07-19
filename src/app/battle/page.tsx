'use client'
import { useState } from "react";
import { Silkscreen as FontSilkscreen} from "next/font/google"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Silkscreen = FontSilkscreen({
    subsets: ["latin"],
    weight:"400",
})

const Battle = () =>{

    return(
        <div className={`${Silkscreen.className} flex flex-col justify-center items-center w-full h-screen bg-[#b8e3f8]`}>
            <div className="bg-[#e5f2f8] w-[380px] h-full">
                <Header/>
                <div className="mt-5">

                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Battle;