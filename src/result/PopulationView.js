import './PopulationView.css'

/* Format a number to a string with spaces, if the number contains more than 4 digits.
 * 10000 -> 10 000, 10000000 -> 10 000 000 and so on. */
const formatNumber = (number) => {
  const numberString = number.toString()
  return numberString.length > 4
    ? numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : numberString
}

function PopulationView({ cityName, population }) {
  return (
    <div className="container">
      <h2 className="subheader">{cityName.toUpperCase()}</h2>
      <div className="population-box">
        <p className="population-header">POPULATION</p>
        <p className="population-number">{formatNumber(population)}</p>
      </div>
    </div>
  )
}

export default PopulationView
