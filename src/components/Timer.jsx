import { useState } from "react";

export default function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const setMinutesExtended = (mode) => {
        if (mode === "up") {
            setMinutes(minutes+5)
        }
        if (mode === "down") {
            if (minutes - 5 >= 0) {
                setMinutes(minutes - 5);
            }
            else {
                setMinutes(0);
            }
        }
    }

    const setSecondsExtended = (mode) => {
        const adjustTime = (delta) => {
            const newSeconds = seconds + delta;

            if (newSeconds >= 60) {
                setSeconds(newSeconds % 60);
                setMinutes(minutes + 1);
            } else if (newSeconds < 0) {
                if (minutes > 0) {
                    setSeconds(60 + newSeconds);
                    setMinutes(minutes - 1);
                } else {
                    setSeconds(0);
                }
            } else {
                setSeconds(newSeconds);
            }
        };

        if (mode === "up") {
            adjustTime(30);
        } else if (mode === "down") {
            adjustTime(-30);
        }
    };

    return (
        <div className="timer__container">
            <div className="label">Go on a Quest</div>
            <div className="timer">
                <div className="arrow__container left">
                    <div onClick={()=>setMinutesExtended("up")} className="arrow"></div>
                    <div onClick={()=>setMinutesExtended("down")} className="arrow"></div>
                </div>
                <div className="timer__value">
                    {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
                </div>
                <div className="arrow__container left">
                    <div onClick={()=>setSecondsExtended("up")} className="arrow"></div>
                    <div onClick={()=>setSecondsExtended("down")} className="arrow"></div>
                </div>
            </div>
        </div>
    )
}