import { useState } from 'react'
import './App.css'
import StopWatch from './components/StopWatch/StopWatch';
import Clock from './components/Clock/Clock';
import TimerApp from './components/Timer/Timer';

function App() {
  const [show, setShow] = useState('clock');

  return (
    <div className="">
      <nav>
        <button onClick={() => {setShow("clock")}}>Saat</button>
        <button onClick={() => {setShow("timer")}}>Taymer</button>
        <button onClick={() => {setShow("stopwatch")}}>Saniyəölçən</button>
      </nav>
      {show === "clock" ? <Clock /> : show === "timer" ? <TimerApp /> : <StopWatch /> }
      {/* <StopWatch />
      <Clock /> */}
    </div>
  )
}

export default App
