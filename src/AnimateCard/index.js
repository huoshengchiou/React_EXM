import React,{useRef,useEffect} from 'react'
import testImg from './test.png'
import classes from './style.module.scss'
function AnimateCard() {

const cardRef=useRef(null)
const wrapperRef=useRef(null)
const ImgWrapper=useRef(null)
const title=useRef(null)

useEffect(()=>{

    wrapperRef.current.addEventListener('mousemove',(e)=>{
        let xAxis = (window.innerWidth/2-e.pageX)/8
        let yAxis=(window.innerHeight/2-e.pageY)/8
        cardRef.current.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
    // in
    wrapperRef.current.addEventListener('mouseenter',e=>{
        cardRef.current.style.transition='none'
        // pop
        title.current.style.transform="translateZ(30px)"
        ImgWrapper.current.style.transform="translateZ(30px) rotateZ(-45deg)"
})
    // out
    wrapperRef.current.addEventListener('mouseleave',(e)=>{
        cardRef.current.style.transition='0.5s ease'
        cardRef.current.style.transform=`rotateY(0deg) rotateX(0deg)`
        title.current.style.transform="translateZ(0px)"
        ImgWrapper.current.style.transform="translateZ(0px) rotateZ(0deg)"
    })

},[])






    return (
        <>
            <div className={classes.wrapper} ref={wrapperRef}>
                <div className={classes.card} ref={cardRef}>
                    <div className={classes.imgWrapper} >
                        <div className={classes.circle}></div>
                        <img ref={ImgWrapper} src={testImg} alt=""/>
                    </div>
                    <div className={classes.info}>
                        <h1 className={classes.title}ref={title}>5731</h1>
                        <h3>Ready</h3>
                        <div className={classes.size}>
                            <button>a</button>
                            <button>b</button>
                            <button>c</button>

                            <button>d</button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimateCard
