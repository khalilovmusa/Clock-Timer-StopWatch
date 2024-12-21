import { useDispatch } from "react-redux";
import { reset } from "../../app/slicers/TimeSlice";

const ResetButton = () => {
    const dispatch = useDispatch()
    return (
    <button onClick={() => dispatch(reset())}>Reset</button>)
}

export default ResetButton;