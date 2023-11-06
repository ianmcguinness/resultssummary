import SummaryCard from './SummaryCard'
import '../styles/Summary.css'

const Summary = ({ data }) => {
  const colors = [
    'hsla(0, 100%, 67%',
    'hsla(39, 100%, 56%',
    'hsla(166, 100%, 37%',
    'hsla(234, 85%, 45%'
  ]
  return (
    <section className='Summary'>
      <h2>Summary</h2>
      {data &&
        data.length > 0 &&
        data.map((res, i) => (
          <SummaryCard key={i} data={res} color={colors[i]} />
        ))}
      <button className='btn'>Continue</button>
    </section>
  )
}
export default Summary
