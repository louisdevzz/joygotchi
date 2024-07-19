'use client'
import { useState } from "react";

const ImageSlider = ({sliders}:{sliders: any}) =>{

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToPrevious = () =>{
        const isFirstIndex = currentIndex == 0;
        const newIndex = isFirstIndex ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () =>{
        const isLastIndex = currentIndex == sliders.length - 1;
        const newIndex = isLastIndex ? 0: currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return(
        <div>
            <button onClick={goToPrevious}>
                <img width={10} height={10} className="w-6 h-6 absolute top-1/2 -left-[50px] " src="/assets/icon/arrow_left.png" alt="arrow" />
            </button>
            <img width={150} src={sliders[currentIndex].url} alt={sliders[currentIndex].title} />
            <button onClick={goToNext}>
                <img width={10} height={10} className="w-6 h-6 absolute top-1/2 -right-[40px] " src="/assets/icon/arrow_right.png" alt="arrow" />
            </button>
        </div>
    )
}

export default ImageSlider;