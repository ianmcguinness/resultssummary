import Result from './components/Result'
import Summary from './components/Summary'
import data from './data'
import './styles/App.css'

const App = () => {
  const avg = Math.round(
    data.reduce((acc, cur) => acc + cur.score, 0) / data.length
  )
  return (
    <main>
      <Result avg={avg} />
      <Summary data={data} />
    </main>
  )
}

export default App
