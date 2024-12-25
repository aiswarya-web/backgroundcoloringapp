import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState("");

  const changeBgcolor = (color) => {
    setBgColor(color)
  }

  return (
    <>
            <div className='appContent text-center' style={{ backgroundColor: bgColor }}>
      <div className="appHeader">
          <h4 className='head fs-1 text-light'>Background Color Changer App</h4>
        
        <div className='btnContainer'>

          <button className='btn' onClick={() => changeBgcolor('#FF2929')}>Red</button>
          <button className='btn' onClick={() => changeBgcolor('#347928')}>Green</button>
          <button className='btn' onClick={() => changeBgcolor('#0A3981')}>Blue</button>
          <button className='btn' onClick={() => changeBgcolor('#F26B0F')}>Orange</button>
          <button className='btn' onClick={() => changeBgcolor('#F9C0AB')}>Peach</button>
        </div>
      </div>
      </div>

    </>
  )
}

export default App
