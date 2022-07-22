import { Title, Wrapper } from "./Header.styles";
import ExchangeRabbit from "./assets/ExchangeRabbit.svg";

export type HeaderProps = {
  text: String;
};

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <Wrapper>
      <img src={ExchangeRabbit} alt="" />
      <Title>{text}</Title>
    </Wrapper>
  );
};
