import { useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const App = () => {
  const dispatch = useDispatch()

  const change = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  return (
    <div>
      filter <input onChange={change} />
    </div>
  )
}

export default App