import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExchangeByID } from "../../helpers/getExchangeByID";
import { ExchangeData } from "../../helpers/getExchangeList";

export const ExchangePage = () => {
  const [exchange, setExchange] = useState<ExchangeData>();

  let { id } = useParams();

  useEffect(() => {
    (async function () {
      const exchangeData = await getExchangeByID(id || "binance");
      console.log(exchangeData);
      setExchange(exchangeData);
    })();
  }, []);

  return (
    <div>
      <div>{exchange?.name}</div>
    </div>
  );
};
