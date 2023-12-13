import React, { useState } from 'react'
import EastOutinedIcon from "@mui/icons-material/EastOutlined";
import WestOutinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css"

const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () =>{
        if(currentSlide === 0){
            setCurrentSlide(2);
        }
        else{
            setCurrentSlide((prev)=>prev-1);
        }
    };

    const nextSlide = () =>{
        if(currentSlide === 2){
            setCurrentSlide(0);
        }
        else{
            setCurrentSlide((next)=>next+1);
        }
    };
        
  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide*100}vw`}}>
            <img src={data[0]}/>
            <img src={data[1]}/>
            <img src={data[2]}/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider
