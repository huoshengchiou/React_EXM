// const images=document.querySelector("[data-src]")
import React,{useEffect,useRef} from 'react'

import test2 from './test2.png'

function Imglazy() {




// const imgOptions={
//         threshold:0, rootMargin:'0px 0px -500px 0px'
//         }    
// const preloadImg=img=>{
//     const src =img.getAttribute('data-src')
//     if(!src) return 
//     img.src=src
// }

// const imgObserver=new IntersectionObserver((entries,imgObserver)=>{
//     entries.forEach(entry=>{
//         if(!entries.isInterscting) return
//         preloadImg(entries.target)
//         imgObserver.unobserve(entries.target)
//     })
// },imgOptions)




// const refImg=useRef(null)

// useEffect(() => {
//     refImg.forEach(image=>imgObserver.observe(image))

// },[])

const Img=useRef(null)


function onEnterView(entries, observer) {
    console.log('entries, observer',entries, observer)
    for (let entry of entries) {
        if (entry.isIntersecting) {
            // 監視目標進入畫面
            const img = entry.target
            img.setAttribute('src', img.dataset.src) // 把值塞回 src
            img.removeAttribute('data-src')
            observer.unobserve(img) // 取消監視
        }
    }
}

const observer = new IntersectionObserver(onEnterView) 




useEffect(()=>{
    
    observer.observe(Img.current) 

},[])






    return (
        <>
        123
            {/* <img ref={refImg} data-src=''  alt=""/> */}
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img  src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img src={test2} alt="" loading="lazy"/>
            <img ref={Img}src={test2} alt="" loading="lazy"/>


        </>
    )
}

export default Imglazy
