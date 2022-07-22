import { Wrapper, ButtonWrapper } from "./PageHeader.styles";
import { Link } from "react-router-dom";
import ExchangeRabbit from "../../../../assets/ExchangeRabbit.svg";

export const PageHeader = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <ButtonWrapper>
          {"<<"}
          <img src={ExchangeRabbit} alt="" />
        </ButtonWrapper>
      </Link>
    </Wrapper>
  );
};
