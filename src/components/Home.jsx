import React from 'react'
import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'

const Home = () => {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  )
}

export default Home
