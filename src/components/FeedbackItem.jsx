import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTrashAlt color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
