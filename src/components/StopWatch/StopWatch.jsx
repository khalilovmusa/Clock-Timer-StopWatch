import { useState, useEffect, useRef } from 'react'
import "./StopWatch.css";

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [ellapsedTime, setEllapsedTime] = useState(0);
    const intervarIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {


        if(isRunning){
            intervarIdRef.current = setInterval(() => {
                setEllapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervarIdRef.current);
        }

    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - ellapsedTime;
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setEllapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {

        let hours = Math.floor(ellapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(ellapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.floor(ellapsedTime / (1000) % 60);
        let milliseconds = Math.floor(ellapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }


    return (<div className='stopwatch'>
        <div className='display'>
            {formatTime()}
        </div>
        <div className='controls'>
            <button onClick={start} className='start-button'>Start</button>
            <button onClick={stop} className='stop-button'>Stop</button>
            <button onClick={reset} className="reset-button">Reset</button>
        </div>
    </div>)
}

export default StopWatch;