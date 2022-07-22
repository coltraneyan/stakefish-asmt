import { Title, Wrapper } from "./Header.styles";
import ExchangeRabbit from "../../../../assets/ExchangeRabbit.svg";

export const Header = () => {
  return (
    <Wrapper>
      <img src={ExchangeRabbit} alt="" />
      <Title>Exchange Rabbit</Title>
    </Wrapper>
  );
};
