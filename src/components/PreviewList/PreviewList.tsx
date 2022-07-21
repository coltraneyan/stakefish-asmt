import { useEffect, useState } from "react";
import { ExchangeData, getExchangeList } from "../../helpers/getExchangeList";
import { Link } from "react-router-dom";

export const PreviewList = () => {
  const [exchanges, setExchanges] = useState<ExchangeData[]>();

  useEffect(() => {
    (async function () {
      const exchangeData = await getExchangeList();
      console.log(exchangeData);
      setExchanges(exchangeData);
    })();
  }, []);

  return (
    <div>
      {exchanges?.map((exchange) => {
        return <Link to={`/${exchange.id}`}>{exchange.name}</Link>;
      })}
    </div>
  );
};
