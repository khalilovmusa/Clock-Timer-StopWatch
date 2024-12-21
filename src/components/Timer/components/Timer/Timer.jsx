import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useRef, useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from '../PlayButton/PlayButton';
import PauseButton from '../PauseButton/PauseButton';
import { useDispatch, useSelector } from 'react-redux';
import { handleTime } from '../../app/slicers/TimeSlice';
import SettingsButton from '../SettingsButton/SettingsButton';
const red = "#f54e4e";

const Timer = () => {
    const dispatch = useDispatch();
    const intervalRef = useRef(0);
    const time = useSelector((state) => state.time.value)
    const [maxValue, setMaxValue] = useState(time);

    const handleStartClick = () => {
        if (time !== 0 && !intervalRef.current) {
            const intervalId = setInterval(() => {
                dispatch(handleTime("start"));
            }, 1000);
            intervalRef.current = intervalId;
        }
    }

    const handleStopClick = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = 0;
    }

    useEffect(() => {
        if (time == 0) {
            handleStopClick()
        }
    }, [time]);

    return (
        <div>
            <CircularProgressbar value={time} maxValue={maxValue} text={`${time}s`} styles={buildStyles({
                rotation: 1,
                strokeLinecap: "round",
                textColor: "#fff",
                pathColor: red,
                trailColor: 'rgba(255,255,255,.2)',
            })} />
            <div>
                <PlayButton handleStartClick={handleStartClick} />
                <PauseButton handleStopClick={handleStopClick} />
            </div>
            <div>
                <SettingsButton setMaxValue={setMaxValue} />
            </div>
        </div>)
}

export default Timer;