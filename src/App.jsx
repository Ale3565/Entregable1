import { useState } from 'react'
import './App.css'
import quotes from "./json/quotes.json"
import QuoteBox from './components/QuoteBox'
import colors from "./utils/colors"

function App() {

  const getRandomNumber = arr => {
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
  const userRandom = getRandomNumber(quotes);
  const colorRandom = getRandomNumber(colors)
  const [randomUser, setRandomUser] = useState(userRandom)
  const [randomColor, setRandomColor] = useState(colorRandom)

  const randomBgStyle = {
    backgroundColor: randomColor
  }

  const getAllRandom = () => {
    setRandomUser(userRandom)
    setRandomColor(colorRandom)
  }
  return (
    <div className="App" style={randomBgStyle}>
      <QuoteBox
        randomUser={randomUser}
        randomColor={randomColor}
        getAllRandom={getAllRandom}
      />
    </div>
  )
}

export default App
