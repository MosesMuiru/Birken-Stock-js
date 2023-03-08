BsFillCartCheckFill
import {BsFillCartCheckFill} from "react-icons/bs"
import  {AiFillHome,AiOutlinePoweroff} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"
import {FaShoePrints} from "react-icons/fa"
import anime from "animejs"
import { useEffect,useRef } from "react"
import React from 'react'

function Nav() {
    // const animationRef = useRef(null)
    // useEffect(() =>{
    //     animationRef.current = anime({
    //         targets:".el",
    //         translateX:250,
    //         delay:function(el,i){
    //             return i*100;
    //         },
    //         loop:true,
    //         direction:"alternate",
    //         easing:"easeInOutState"
    

    //     })
      
    // },[])
  

    const style ={
        hover:"w-7 pb-1 duration-300 hover:border-b hover:border-black font-bold text-2xl"
    }
  return (
    <div className="w-full h-[100vh] ">
        <div className="heed h-full  flex flex-col justify-center items-start gap-10 bg-red-400 pl-5">
            <h2 className= {`${style.hover} `}> <AiFillHome className="text-2xl"></AiFillHome></h2>
            <h2 className= {`${style.hover} font-bold `}><BsFillCartCheckFill></BsFillCartCheckFill> </h2>
            <h2 className= {`${style.hover} font-bold text-2xl` }><BiLogIn></BiLogIn></h2>
            <h2 className= {`${style.hover} `}><AiOutlinePoweroff></AiOutlinePoweroff></h2>
            <div className="el h-4 w-3 bg-greed">red</div>
            <button onClick={() =>{
                animationRef.current.restart()
            }}>restart</button>
        </div>
    </div>
  )
}

export default Nav