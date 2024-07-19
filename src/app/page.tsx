'use client'
import { useEffect, useState } from "react";
import { Silkscreen as FontSilkscreen} from "next/font/google"
import { HereWallet } from "@here-wallet/core";
import ImageSlider from "@/components/ImageSlider";
import CountDownTimer from "@/components/CountDownTimer";
import Footer from "@/components/Footer";
import { providers, utils } from "near-api-js";
import type {
  AccountView,
  CodeResult,
} from "near-api-js/lib/providers/provider";
import axios from "axios";

const Silkscreen = FontSilkscreen({
    subsets: ["latin"],
    weight:"400",
})

const Home = () =>{
  const [account,setAccount] = useState<string|null>(null);
  const [petLists, setPetLists] = useState<any>([]);

  useEffect(()=>{
    FetchPet()
  },[])

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

  const petList = [
    {url: "/assets/pet/gotchi.gif", title:"pet_1"},
    {url: "/assets/pet/gotchi.gif", title:"pet_2"}
  ]

  const FetchPet = async() =>{
    const pets = await axios.get("/api/list_pet");
    console.log("listpet",pets.data)
    setPetLists(pets.data)
  }

  return(
    <div className={`${Silkscreen.className} flex flex-col justify-center items-center w-full h-full bg-[#b8e3f8]`}>
        <div className="bg-[#e5f2f8] w-[380px] h-full">
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
                    <p className="text-[#fff] text-xl mt-2 ml-5">Pet #231</p>
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
                  <CountDownTimer seconds={30000}/>
                </div>
            </div>
            <div className="p-3">
                <div className="mt-2">
                    <div className="w-full h-[250px] rounded-md flex justify-center flex-row relative">
                        <img width={60} className="w-full h-full rounded-md" src="/assets/background/screen_pet.png" alt="screen" />
                        <div className="flex flex-row justify-between">
                          {/* <img width={10} height={10} className="w-6 h-6 absolute top-1/2 left-[70px] " src="/assets/icon/arrow_left.png" alt="arrow" /> */}
                          {/* <img width={150} className="absolute top-1/2 left-[53%] transform -translate-x-1/2 -translate-y-1/2" src="/assets/pet/pet.png" alt="pet" /> */}
                          <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                            <ImageSlider petList={petLists}/>
                          </div>
                          {/* <img width={10} height={10} className="w-6 h-6 absolute top-1/2 right-[60px] " src="/assets/icon/arrow_right.png" alt="arrow" /> */}
                        </div>
                        {/* <p className="text-[#fff] font-semibold absolute top-3/4 mt-3 left-1/2 transform -translate-x-1/2 ">Pet Name</p> */}
                    </div>
                </div>
                <div className="mt-2 bg-[#a9c6e4] w-full flex-row flex justify-between rounded-lg px-3 py-4">
                    <div className="flex flex-col text-center">
                        <p className="text-xl">0 NEAR</p>
                        <span className="text-[#00000088]">REWARDS</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="text-xl">6</p>
                        <span className="text-[#00000088]">LEVEL</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="text-xl">NICE</p>
                        <span className="text-[#00000088]">STATUS</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="text-xl">1</p>
                        <span className="text-[#00000088]">STAR</span>
                    </div>
                </div>
                <div className="mt-3 flex flex-row w-full justify-center items-center gap-5">
                    <button>
                      <div className="bg-[#a9c6e4] p-2 h-16 w-16 flex justify-center rounded-lg">
                          <img width={20} src="/assets/items/water.png" alt="water" />
                      </div>
                    </button>
                    <button>
                      <div className="bg-[#a9c6e4] p-2 h-16 w-16 flex justify-center rounded-lg">
                          <img width={40} src="/assets/items/beef.png" alt="beef" />
                      </div>
                    </button>
                    <button>
                      <div className="bg-[#a9c6e4] p-2 h-16 w-16 flex justify-center rounded-lg">
                          <img width={40} src="/assets/items/shield.png" alt="shield" />
                      </div>
                    </button>
                    <button>
                      <div className="bg-[#a9c6e4] p-2 h-16 w-16 flex justify-center rounded-lg">
                          <img width={40} src="/assets/items/holy_water.png" alt="water" />
                      </div>
                    </button>
                </div>
                <div className="mt-3 bg-[#a9c6e4] w-full max-h-36 rounded-lg px-3 py-4">
                    <div className="flex flex-row justify-between w-full">
                        <p>USE 1 SUNLIGHT</p>
                        <p>10 $SEED</p>
                    </div>
                    <div className="flex flex-row justify-center w-full mt-2">
                        <p className="text-[#00000088]">50 PTS & 12 HOURS TOD</p>
                    </div>
                    <div className="flex flex-row justify-center w-full mt-2">
                        <button className="bg-[#2f3b53] w-48 h-10 rounded-lg">
                            <span className="text-[#fff] font-semibold">BUY</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home;   