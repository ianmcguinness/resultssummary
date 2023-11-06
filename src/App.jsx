import { useState, useEffect } from 'react'
import Result from './components/Result'
import Summary from './components/Summary'
import './styles/App.css'

const App = () => {
  const [data, setData] = useState([])
  const getData = () =>
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setData(data))

  useEffect(() => {
    getData()
  }, [])
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
