import { StringDecoder } from "string_decoder";

export type ExchangeByIDData = {
  alert_notice: string;
  centralized: boolean;
  country: string;
  description: string;
  facebook_url: string;
  has_trading_incentive: boolean;
  image: string;
  name: string;
  other_url_1: string;
  other_url_2: string;
  public_notice: string;
  reddit_url: string;
  slack_url: string;
  status_updates: Array<any>;
  telegram_url: string;
  tickers: Array<any>;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  trust_score: number;
  trust_score_rank: number;
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
