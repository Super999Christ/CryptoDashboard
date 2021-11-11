import Accordion from 'react-bootstrap/Accordion'
import './Coin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap, ath, ath_date, circulating_supply, max_supply }) => {
  return (
    <div className="coin-container">
      <Accordion className="coin-row">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="coin">
              <img src={image} alt="crypto" />
              <h1>{name}</h1>
              <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
              <p className="coin-price">${price}</p>
              <p className="coin-volume">${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
              ) : (
                <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
              )}
              <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
          </Accordion.Header>
          <Accordion.Body className="coin-body">
            <p>All Time High: ${ath.toLocaleString()} on {ath_date.slice(0,10)}</p>
            <p>Circulating Supply: {circulating_supply}</p>
            <p>Max Supply: { max_supply ? max_supply : 'Not Applicable'}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Coin
