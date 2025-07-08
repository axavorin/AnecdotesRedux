import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
    console.log(event.target)
    const text = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(text))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App