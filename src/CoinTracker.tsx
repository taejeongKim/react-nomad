// coin list api: https://api.coinranking.com/v2/coins

import { useEffect, useState } from 'react';

interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  price: number;
}

function CoinTracker() {
  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    fetch('https://api.coinranking.com/v2/coins')
      .then((res) => res.json())
      .then((json) => {
        const coins = json.data.coins;
        // 객체 요소의 타입 바꾸기
        const transformedCoins = coins.map((coin: Coin) => {
          return { ...coin, price: Number(coin.price) };
        });
        setCoins(transformedCoins);
      });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      <ul>
        {coins.map((coin) => (
          <li key={coin.uuid}>
            {coin.name} ({coin.symbol}: ${coin.price.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinTracker;
