import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { add, changeMessage } from "./store/main_actions"

function App() {
  const count = useSelector((state) => state.main.count)
  const message = useSelector((state) => state.main.message)
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(add())
  }

  const handleChangeMessage = () => {
    const msgNew = prompt("Message new pleeze:")
    dispatch(changeMessage(msgNew))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleAdd}>Count: {count}</div>
        <div onClick={handleChangeMessage}>Message: {message}</div>
      </header>
    </div>
  )
}

export default App
