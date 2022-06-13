import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card classname='about'>
      <h1>About this project</h1>
      <p>This is a React app to leave Feedback for product or service</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
