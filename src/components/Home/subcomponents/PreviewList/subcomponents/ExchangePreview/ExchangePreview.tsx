import { ExchangeData } from "../../../../../../helpers/getExchangeList";
import {
  Name,
  Logo,
  FlexColumn,
  FlexRow,
  Description,
  Volume,
  Wrapper,
  Label,
  URL,
} from "./ExchangePreview.styles";

export type ExchangePreviewProps = {
  exchange: ExchangeData;
};

export const ExchangePreview: React.FC<ExchangePreviewProps> = ({
  exchange,
}) => {
  return (
    <Wrapper>
      <FlexRow>
        <Logo>
          {<img src={`${exchange.image}`} alt={`Logo for ${exchange.name}`} />}
        </Logo>

        <FlexColumn>
          <Name>{exchange.name}</Name>

          <Description>
            {exchange.country +
              ((exchange.year_established &&
                ` · ` + exchange.year_established) ||
                "")}
          </Description>
        </FlexColumn>
      </FlexRow>

      <FlexColumn>
        <FlexRow>
          <Label>24H Vol: </Label>
          <Volume>
            {exchange.trade_volume_24h_btc.toFixed().toString()} BTC
          </Volume>
        </FlexRow>
        <URL>
          {exchange?.url[8] !== "w" && "www."}
          {exchange?.url.slice(
            8,
            exchange?.url.slice(-1) === "/" ? -1 : undefined
          )}
        </URL>
      </FlexColumn>
    </Wrapper>
  );
};
