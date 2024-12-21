import './Timer.css'
import Settings from './components/Settings/Settings'
import Timer from './components/Timer/Timer'
import { useState } from 'react';

function TimerApp() {

  const [showSettings, setShowSettings ] = useState(false);

  return (
    <main className="timer-main">
      {showSettings ? <Settings /> : <Timer/>}
    </main>
  )
}

export default TimerApp;
