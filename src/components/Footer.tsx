'use client'
import Link from "next/link"

type Button = {
    src: string,
    title: string,
    url: string
}

const Footer = () =>{
    
    const currentIndex = Number(localStorage.getItem("linkIndex"))??0;

    const ImageButton = [
        {src: "/assets/button/home.png",title: "home",url:"/"},
        {src: "/assets/button/mining.png",title: "mining", url: ""},
        {src: "/assets/button/attack.png",title: "attack", url: "/battle"},
        {src: "/assets/button/petlist.png",title:"petlist", url: ""},
        {src: "/assets/button/training.png",title: "training", url: ""},
    ]

    const handleSelectIndex = (i:number) =>{
        localStorage.setItem("linkIndex",i.toString())
    }

    return(
        <div className="mt-2 w-full relative">
            <img width={200} height={100} className="w-full h-[108px]" src="/assets/background/frame_bottom.png" alt="frame" />
            <div className="absolute top-2 left-0 flex justify-center w-full">
                <div className="flex flex-row gap-2 justify-between w-full px-2 items-center">
                    {ImageButton.map((btn:Button,i:number)=>(
                        <Link href={btn.url} key={i} onClick={()=>handleSelectIndex(i)}>
                            <img width={60} height={60} className={currentIndex==i?"w-[80px] h-[80px]":"w-[65px] h-[65px]"} src={btn.src} alt={btn.title} />
                        </Link>
                    ))}
                    {/* <img width={60} className="w-[65px] h-[65px]" src="/assets/button/home.png" alt="button" />
                    <img width={60} className="w-[65px] h-[65px]" src="/assets/button/mining.png" alt="button" />
                    <img width={90} height={90} className="w-[90px] h-[90px]" src="/assets/button/attack.png" alt="button" />
                    <img width={60} className="w-[65px] h-[65px]" src="/assets/button/petlist.png" alt="button" />
                    <img width={60} className="w-[65px] h-[65px]" src="/assets/button/training.png" alt="button" /> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;