import React from 'react'

const Header = ({ text }) => {
  return (
    <header>
      <div className='container'>
        <h2>Feedback UI</h2>
        <p>{text}</p>
      </div>
    </header>
  )
}

export default Header
