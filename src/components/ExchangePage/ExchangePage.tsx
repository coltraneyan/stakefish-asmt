import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExchangeByID } from "../../helpers/getExchangeByID";
import { ExchangeByIDData } from "../../helpers/getExchangeByID";
import { PageHeader } from "./subcomponents/PageHeader/PageHeader";
import { ExchangeInfo } from "./subcomponents/ExchangeInfo/ExchangeInfo";

export const ExchangePage = () => {
  const [exchange, setExchange] = useState<ExchangeByIDData>();

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
      <PageHeader />
      <ExchangeInfo exchange={exchange} />
    </div>
  );
};
