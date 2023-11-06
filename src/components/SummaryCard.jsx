import '../styles/SummaryCard.css'

const SummaryCard = ({ data, color }) => {
  return (
    <div className='SummaryCard' style={{ backgroundColor: `${color}, 0.1)` }}>
      <img src={data.icon} alt={data.category} />
      <h3 className='card-category' style={{ color: `${color}, 1)` }}>
        {data.category}
      </h3>
      <div>
        <span className='card-score'>{data.score}</span> / 100
      </div>
    </div>
  )
}
export default SummaryCard
