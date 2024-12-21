import { useState, useEffect } from 'react';
import "./Clock.css";

const Clock = () => {

    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const FormatTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    const padZero = (num) => {
        return (num < 10 ? "0" : "") + num;
    }

    return (<div className="clock-container">
        <div className="clock">
            <span>{FormatTime()}</span>
        </div>

    </div>)
}

export default Clock;