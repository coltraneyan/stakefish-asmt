import { StringDecoder } from "string_decoder";

export type ExchangeByIDData = {
  country: string;
  description: string;
  facebook_url: string;
  image: string;
  name: string;
  reddit_url: string;
  telegram_url: string;
  trade_volume_24h_btc: number;
  trust_score: number;
  twitter_handle: string;
  url: string;
  year_established: number;
};

export const getExchangeByID = async (
  id: string
): Promise<ExchangeByIDData> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/exchanges/${id}`,
    { mode: "cors" }
  );
  const exchange = await response.json();
  return exchange;
};
