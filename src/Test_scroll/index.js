import React, { useEffect, useRef, useState } from 'react'
import {
    Observable,
    Subject,
    asapScheduler,
    pipe,
    of,
    from,
    interval,
    merge,
    fromEvent,
} from "rxjs";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

const Test_scroll = () => {
    const scroll = useRef(null)

    const [position, setposition] = useState(window.pageYOffset)
    const handleScroll = () => {
        setposition(window.pageYOffset)
        console.log(position)
    }

    const handleScrollRx = x => {
        console.log(x)
        // pageYOffset
    }
    const scroll$ = useRef(null)
    useEffect(() => {
        scroll.current = fromEvent(window, 'scroll')
        scroll$.current = scroll.current.subscribe(x => handleScrollRx(x.path[1].pageYOffset))
        // console.log(scroll.current)
        window.addEventListener("scroll", handleScroll);

        return () => {
            scroll$.current.unsubscribe()
        }
    }, [])

    return (
        <>
            <div style={{ width: '100vw', height: '300vh' }}>Test_scroll</div>
        </>
    )
}

export default Test_scroll
