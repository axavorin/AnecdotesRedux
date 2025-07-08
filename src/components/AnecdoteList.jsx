import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import FilterBar from './FilterBar'
import Notification from './Notification'

const App = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(element => element.content.includes(filter))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(showNotification(`you voted for '${anecdotes.find(element => element.id === id).content}'`))
    setTimeout(() => {
        dispatch(hideNotification())
    }, 3000);
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <FilterBar />
      {anecdotes.sort((a, b) => a.votes > b.votes ? -1 : 1).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App