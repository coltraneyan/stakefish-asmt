import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExchangeByID } from "../../helpers/getExchangeByID";
import { ExchangeByIDData } from "../../helpers/getExchangeByID";
import { PageHeader } from "./subcomponents/PageHeader/PageHeader";
import { ExchangeInfo } from "./subcomponents/ExchangeInfo/ExchangeInfo";

export const ExchangePage = () => {
  const [exchange, setExchange] = useState<ExchangeByIDData>();
  const [delay, setDelay] = useState<Boolean>(true);

  let { id } = useParams();

  useEffect(() => {
    (async function () {
      const exchangeData = await getExchangeByID(id || "binance");
      setExchange(exchangeData);
      setDelay(false);
    })();
  }, []);

  return (
    <div>
      <PageHeader />
      {/* no use of true loading screen, 
      as the API delay is short enough that a simple delay 
      method to display all data at once is sufficient (ms)  */}
      <>{delay || <ExchangeInfo exchange={exchange} />}</>
    </div>
  );
};
