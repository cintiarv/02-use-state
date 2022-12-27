import logo from './logo.svg'
import './App.css'
import { FirstState } from './components/FirstState'
import { ExerciseComponent } from './components/ExerciseComponent'

function App () {
  const date = new Date()
  const yearActual = date.getFullYear()
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1> El estado en react </h1>
        <FirstState />

        <ExerciseComponent
          actualYear={yearActual}
        />

      </header>
    </div>
  )
}

export default App
