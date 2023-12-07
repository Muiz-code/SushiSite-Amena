import Categoty from "./Categoty";
import sushiSalad from "../Asset/Sushi Salad 1.png";
import sushiSalad2 from "../Asset/Sushi Salad 2.png";
import sushiSalad3 from "../Asset/Sushi Salad 3.png";
import heart from "../Asset/Heart Group 1.png";
import star from "../Asset/star.png";

const Content3 = () => {
  return (
    <div>
      <div className="flex flex-col mb-10">
        <p className="text-[#F63B3B] text-lg font-medium mb-10">
          SPECIAL DISHES
        </p>
        <h1 className="text-5xl font-bold">
          Best Dishes <br /> From Our Menu
        </h1>
      </div>
      <div className="flex gap-10 justify-center">
        <div className="relative shadow-2xl px-[70px] py-10 rounded-2xl">
          <Categoty
            image={heart}
            moreStyle={"absolute right-[0px] top-0 w-[20%]"}
          />
          <Categoty image={sushiSalad} moreStyle={"w-[100%]"} />
          <Categoty
            text1={"Best Sushi Salad"}
            moreStyle={"text-xl font-bold"}
          />
          <Categoty
            text2={"Description of the item"}
            moreStyle={"text-sm text-[#555555]"}
          />
          <div className="flex justify-between mt-9">
            <p className="font-bold">
              <span className="text-red-500">$</span>10.00
            </p>
            <div className="flex items-center gap-1">
              <Categoty image={star} moreStyle={"w-[15px]"} />
              <Categoty text1={"4.9"} />
            </div>
          </div>
        </div>

        <div className="relative shadow-2xl px-[70px] py-10 rounded-2xl flex flex-col ">
          <Categoty
            image={heart}
            moreStyle={"absolute right-[0px] top-0 w-[20%]"}
          />

          <Categoty image={sushiSalad2} moreStyle={"w-[100%]"} />

          <Categoty
            text1={"Zen Zest Sashimi Salad"}
            moreStyle={"text-xl font-bold"}
          />
          <Categoty
            text2={"Description of the item"}
            moreStyle={"text-sm text-[#555555]"}
          />
          <div className="flex justify-between mt-9">
            <p className="font-bold">
              <span className="text-red-500">$</span>22.00
            </p>
            <div className="flex items-center gap-1">
              <Categoty image={star} moreStyle={"w-[15px]"} />
              <Categoty text1={"4.9"} />
            </div>
          </div>
        </div>

        <div className="relative shadow-2xl px-[70px] py-10 rounded-2xl flex flex-col ">
          <Categoty
            image={heart}
            moreStyle={"absolute right-[0px] top-0 w-[20%]"}
          />

          <Categoty image={sushiSalad3} moreStyle={"w-[100%]"} />

          <Categoty
            text1={"Zen Zest Sashimi Salad"}
            moreStyle={"text-xl font-bold"}
          />
          <Categoty
            text2={"Description of the item"}
            moreStyle={"text-sm text-[#555555]"}
          />
          <div className="flex justify-between mt-9">
            <p className="font-bold">
              <span className="text-red-500">$</span>22.00
            </p>
            <div className="flex items-center gap-1">
              <Categoty image={star} moreStyle={"w-[15px]"} />
              <Categoty text1={"4.9"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
