import React, { useRef, useEffect } from 'react'
import classes from './style.module.scss'
import { gsap } from "gsap";


function Landing() {

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
    const myDOM = useRef(null)
    let a = useRef(null)

    useEffect(() => {
        tl.to(a, { y: '0%', duration: 1, stagger: 0.25 })
            .play();
        // tl.to('#logo', { y: '-100%', duration: 1.5, delay: 0.5 })
        // tl.to('.intro', { y: '-100%', duration: 1 }, '-=2')
    }, [])






    return (
        <>
            <main>
                <section className={classes.landing}>
                    <nav>
                        <h1 id='logo'>Afloat</h1>
                        <ul className={classes.navLinks}>
                            <li>home</li>
                            <li>contact</li>
                            <li>about</li>
                        </ul>
                    </nav>
                    <h2 className={classes.bigText}>Stay Afloat</h2>
                </section>
            </main>
            <div className={classes.intro}>
                <div className={classes.introText}>
                    <h1 className={classes.hide}>
                        <span className={classes.text} ref={span => a.current = span}>creating inovation</span>
                    </h1>
                    <h1 className={classes.hide}>
                        <span className={classes.text}>Everyday</span>
                    </h1>
                    <h1 className={classes.hide}>
                        <span className={classes.text}>People</span>
                    </h1>
                </div>

            </div>
            <div className={classes.slider}></div>
        </>
    )
}

export default Landing
