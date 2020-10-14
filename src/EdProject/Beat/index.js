import React, { useRef, useEffect } from 'react'
import classes from "./style.module.scss";

function Beat() {
    const Bars = useRef([])
    class DrumKit {
        constructor() {
            this.pads = document.querySelector('.pad')
            //catch audio
            this.kickAudio = document.querySelector('.kickSound')
            this.index = 0
            this.bpm = 150
        }

        repeat() {
            //到8時為0
            let step = this.index % 8
            console.log(Bars.current[step])
            this.index++
        }
        start() {
            const interval = (60 / this.bpm) * 1000
            setInterval(() => {
                this.repeat()
            }, interval)
        }

    }
    const drumKit = new DrumKit()
    useEffect(() => {
        // drumKit.start()
    }, [])






    return (
        <>
            <div className={classes.sequencer}>
                <div className={classes.kickTrack}>
                    <div className={classes.controls}>
                        <h1>kick</h1>
                        <button data-track='0' className={`${classes.mute} ${classes.kickVolume}`}>
                            <i className="fas fa-volume-mute"></i>
                        </button>
                        <select name="kickSelect" id="kickSelect">
                            <option value="./allSounds/kick-classic.wav">Classic Kick</option>
                            <option value="./allSounds/kick-808.wav">Kick808</option>
                            <option value="./allSounds/kick-heavy.wav">Kick heavy</option>
                        </select>
                    </div>
                    <div className={classes.kick}>

                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b0}`} ref={ref => Bars.current[0] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b1}`} ref={ref => Bars.current[1] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b2}`} ref={ref => Bars.current[2] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b3}`} ref={ref => Bars.current[3] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b4}`} ref={ref => Bars.current[4] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b5}`} ref={ref => Bars.current[5] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b6}`} ref={ref => Bars.current[6] = ref}></div>
                        <div className={`${classes.pad} ${classes.kickPad} ${classes.b7}`} ref={ref => Bars.current[7] = ref}></div>


                    </div>

                </div>
            </div>
            <button>Play</button>
            <div className="tempo">
                <input
                    type="range"
                    className="tempo-slider"
                    max="300"
                    min="20"
                    value="150"
                />
                <p>Tempo: <span className="tempo-nr">150</span></p>
            </div>
            <audio className="kick-sound" src="./sounds/kick-classic.wav"></audio>
            <audio className="snare-sound" src="./sounds/snare-acoustic01.wav"></audio>
            <audio className="hihat-sound" src="./sounds/hihat-acoustic01.wav"></audio>
        </>
    )
}

export default Beat
