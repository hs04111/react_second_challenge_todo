const BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchCoins() {
  const response = await fetch(BASE_URL + '/coins');
  const json = await response.json();
  return json;
}

export async function fetchCoin(coinId: string) {
  const infoData = await (await fetch(BASE_URL + `/coins/${coinId}`)).json();
  return infoData;
}

export async function fetchTickers(coinId: string) {
  const priceData = await (await fetch(BASE_URL + `/tickers/${coinId}`)).json();
  return priceData;
}
