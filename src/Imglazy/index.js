// const images=document.querySelector("[data-src]")
import React,{useEffect,useRef} from 'react'

function Imglazy() {




const imgOptions={
        threshold:0, rootMargin:'0px 0px -500px 0px'
        }    
const preloadImg=img=>{
    const src =img.getAttribute('data-src')
    if(!src) return 
    img.src=src
}

const imgObserver=new IntersectionObserver((entries,imgObserver)=>{
    entries.forEach(entry=>{
        if(!entries.isInterscting) return
        preloadImg(entries.target)
        imgObserver.unobserve(entries.target)
    })
},imgOptions)




const refImg=useRef(null)

useEffect(() => {
    refImg.forEach(image=>imgObserver.observe(image))

},[])




    return (
        <>
            <img ref={refImg} data-src=''  alt=""/>
        </>
    )
}

export default Imglazy
