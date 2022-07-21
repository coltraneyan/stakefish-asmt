import { ExchangeData } from "./getExchangeList";
// will handle errors in component

export const getExchangeByID = async (id: String): Promise<ExchangeData> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/exchanges/${id}`,
    { mode: "cors" }
  );
  const exchange = await response.json();
  return exchange;
};
