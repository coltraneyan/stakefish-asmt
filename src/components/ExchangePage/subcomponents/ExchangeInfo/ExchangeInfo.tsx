import { ExchangeByIDData } from "../../../../helpers/getExchangeByID";
import {
  TitleWrapper,
  Wrapper,
  Volume,
  FlexRow,
  FlexColumn,
  Label,
} from "./ExchangeInfo.styles";

export type ExchangeInfoProps = {
  exchange?: ExchangeByIDData;
};

export const ExchangeInfo: React.FC<ExchangeInfoProps> = ({ exchange }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <img src={`${exchange?.image}`} alt={`Logo for ${exchange?.name}`} />
        {exchange?.name}
      </TitleWrapper>

      <FlexColumn>
        <FlexRow>
          <Label>Location:</Label>
          {exchange?.country}
        </FlexRow>
        <FlexRow>
          <Label>{exchange?.year_established && `Founded:`}</Label>
          <>{exchange?.year_established}</>
        </FlexRow>
        <FlexRow>
          <Label>Website: </Label>
          <a href={exchange?.url}>Visit</a>
        </FlexRow>
        <br />
        <FlexRow>
          <Label>24H Volume:</Label>
          <Volume>{exchange?.trade_volume_24h_btc.toFixed() + " BTC"}</Volume>
        </FlexRow>
        <FlexRow>
          <Label>Trust Score:</Label>
          <>{exchange?.trust_score}</>
        </FlexRow>
        <br />
        {exchange?.facebook_url && (
          <FlexRow>
            <Label>Facebook: </Label>
            <a href={exchange?.facebook_url}>Visit</a>
          </FlexRow>
        )}
        {exchange?.reddit_url && (
          <FlexRow>
            <Label>Reddit: </Label>
            <a href={exchange.reddit_url}>Visit</a>
          </FlexRow>
        )}
        {exchange?.telegram_url && (
          <FlexRow>
            <Label>Telegram: </Label>
            <a href={exchange.telegram_url}>Visit</a>
          </FlexRow>
        )}
        {exchange?.twitter_handle && (
          <FlexRow>
            <Label>Twitter Handle: </Label>
            <>@{exchange.twitter_handle}</>
          </FlexRow>
        )}
      </FlexColumn>
    </Wrapper>
  );
};
