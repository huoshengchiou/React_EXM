import React,{useEffect,useRef} from 'react'
import classes from './style.module.scss'

function DragTest() {

const dragElement=useRef(null)


useEffect(() => {

},[])



    return (
        <>
        <div className={classes.container}>
         <div className={classes.drag}>1</div>
         <div className={classes.drag}>2</div>
        </div>
        <div className={classes.container}>
         <div className={classes.drag}>3</div>
         <div className={classes.drag}>4</div>
        </div>

            <custom-tag> 自定義tag  </custom-tag>

        </>
    )
}

export default DragTest
