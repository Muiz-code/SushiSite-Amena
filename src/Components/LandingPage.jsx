import sushi from "../Asset/Sushi.png";
import play from "../Asset/Play.svg";
import BestSushi from "../Asset/BestSushi.png";
import rating from "../Asset/ItemsSushi.png";
import Button from "./Button";

const LandingPage = () => {
  return (
    <div>
      <div className="columns-2 flex items-center">
        <div className="w-full">
          <h1 className="text-6xl font-bold">
            Sushi Bliss, Every <br /> Roll a Flavorful{" "}
            <span className="text-[#39DB4A]">Kiss</span>
          </h1>
          <p className="text-[#4A4A4A] mt-20 text-[23px] font-light">
            Masters of Maki: Elevate Your Taste Buds with Our Sushi <br />{" "}
            Creations, Where Tradition Meets Innovation!
          </p>
          <div className="flex mt-6 gap-9 items-center">
            <Button text={"Order Now"} moreStyle={"text-xl"} />
            <div className="flex items-center gap-3">
              <p className="text-[#606060] text-xl">Watch Video</p>
              <img src={play} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <img src={sushi} alt="" />
          <img src={BestSushi} className="absolute top-10 left-0" alt="" />
          <img src={rating} className="absolute bottom-0 left-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
