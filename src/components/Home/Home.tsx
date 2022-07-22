import { Header } from "./subcomponents/Header/Header";
import { PreviewList } from "./subcomponents/PreviewList/PreviewList";

export const Home = () => {
  return (
    <div>
      <Header text={"Exchange Rabbit"} />
      <PreviewList />
    </div>
  );
};
