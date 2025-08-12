import MyNavBar from "../mycomponents/MyNavbar";
import { HeroSectionOne } from "../mycomponents/herosection";
import Cards from "../mycomponents/cardscarousel";
import TextFlip from "../mycomponents/textflip";
import { BackgroundLines } from "@/components/ui/background-lines";
import GlowingCard from "../mycomponents/glowingcards";
import Leaders from "../mycomponents/leaderscard";
import Lamp from "../mycomponents/lamp";

const Home = () => {
  return (
    <>
      <MyNavBar />
    
      <BackgroundLines>
      <HeroSectionOne />
      </BackgroundLines>
      <Cards />
      <TextFlip />
      <br /><br />
      <GlowingCard />
      <Leaders />
      <Lamp />
    </>
  );
};
export default Home;
