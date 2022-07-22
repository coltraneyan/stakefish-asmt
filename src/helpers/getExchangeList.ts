export type ExchangeData = {
  id: string;
  name: string;
  year_established: number;
  country: string;
  url: string;
  image: string;
  trade_volume_24h_btc: number;
};

// will handle errors in component

export const getExchangeList = async (): Promise<ExchangeData[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/exchanges?per_page=10",
    { mode: "cors" }
  );
  const exchangeList = await response.json();
  return exchangeList;
};
