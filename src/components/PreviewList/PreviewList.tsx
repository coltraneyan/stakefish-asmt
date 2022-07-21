import { useEffect, useState } from "react";
import { ExchangeData, getExchangeData } from "../../helpers/getExchangeData";

export const PreviewList = () => {
  const [exchanges, setExchanges] = useState<ExchangeData[]>();

  useEffect(() => {
    (async function () {
      const exchangeData = await getExchangeData();
      console.log(exchangeData);
      setExchanges(exchangeData);
    })();
  }, []);

  return (
    <div>
      {exchanges?.map((exchange) => {
        return <div>{exchange.name}</div>;
      })}
    </div>
  );
};
