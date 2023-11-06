import '../styles/Result.css'

const Result = ({ avg }) => {
  return (
    <section className='Result'>
      <h3>Your Result</h3>
      <div className='circle'>
        <h1>{isNaN(avg) ? '' : avg}</h1>
        <h6>of 100</h6>
      </div>
      <h2 className='description'>Great</h2>
      <p className='result-text'>
        Your performance exceeds 65% of the people conducting the test here!
      </p>
    </section>
  )
}
export default Result
