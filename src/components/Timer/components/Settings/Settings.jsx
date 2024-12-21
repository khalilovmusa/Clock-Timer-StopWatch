import "./Settings.css";
import { incrementByAmount, decrementByAmount } from "../../app/slicers/TimeSlice";
import { useDispatch, useSelector } from "react-redux";
import ResetButton from "../ResetButton/ResetButton";

const Settings = ({ setMaxValue }) => {
    const time = useSelector((state) => state.time.value)
    const dispatch = useDispatch();
    const setValue = (num) => {
        setMaxValue(num + time)
    }
    return (<div className="settings-buttons-wrapper">
        <div className="reset-wrapper">
            <ResetButton />
        </div>
        <div>
            <button className="settings-button" onClick={() => { dispatch(incrementByAmount(10)), setValue(10) }}>+10</button>
            <button className="settings-button" onClick={() => { dispatch(incrementByAmount(1)), setValue(1) }}>+1</button>
            <button className="settings-button" onClick={() => { dispatch(decrementByAmount(1)), setValue(-1) }}>-1</button>
            <button className="settings-button" onClick={() => { dispatch(decrementByAmount(10)), setValue(-10) }}>-10</button>
        </div>
    </div>)
}

export default Settings;

