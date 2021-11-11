import { useState, useEffect } from 'react'
import './App.css';
import Coin from './components/Coin'
import Axios from 'axios'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(({ data }) => {
        setCoins(data)
        console.log(data)
      })
      .catch(err => console.error(err))
  }, [])

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">CryptoDashboard</h1>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="search"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            ath={coin.ath}
            ath_date={coin.ath_date}
            circulating_supply={coin.circulating_supply}
            max_supply={coin.max_supply}
          />
        )
      })}
    </div>
  );
}

export default App;
