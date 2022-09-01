import React from 'react'

const QuoteBox = ({ randomColor, randomUser, getAllRandom }) => {

  const objectStyle = {
    color: randomColor
  }
  const objectBgStyle = {
    backgroundColor: randomColor
  }
  return (
    <div className='card' style={objectStyle}>
      <h1>{randomUser.quote}</h1>
      <h2>{randomUser.author}</h2>
      <button style={objectBgStyle} onClick={getAllRandom} className='btn'>&#62;</button>
    </div>
  )
}

export default QuoteBox