export type ExchangeData = {
  id: String;
  name: String;
  year_established: Number;
  country: String;
  description: String;
  url: string;
  image: String;
  has_trading_incentive: Boolean;
  trust_score: Number;
  trust_score_rank: Number;
  trade_volume_24h_btc: Number;
  trade_volume_24h_btc_normalized: Number;
};

// will handle errors in component

export const getExchangeData = async (): Promise<ExchangeData[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/exchanges?per_page=10",
    { mode: "cors" }
  );
  const exchangeData = await response.json();
  return exchangeData;
};
