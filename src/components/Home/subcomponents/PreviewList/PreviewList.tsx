import { useEffect, useState } from "react";
import { ExchangePreview } from "./subcomponents/ExchangePreview/ExchangePreview";
import {
  ExchangeData,
  getExchangeList,
} from "../../../../helpers/getExchangeList";
import { ListItem, Wrapper } from "./PreviewList.styles";
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
    <Wrapper>
      {exchanges?.map((exchange, index) => {
        return (
          <ListItem>
            {index < 9 && "0"}
            {index + 1}
            <Link to={`/${exchange.id}`} key={exchange.id}>
              <ExchangePreview exchange={exchange} />
            </Link>
          </ListItem>
        );
      })}
    </Wrapper>
  );
};
