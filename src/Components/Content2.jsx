import Categoty from "./Categoty";
import sushi1 from "../Asset/sushi1.png";
import sushi2 from "../Asset/sushi2.png";
import sushi3 from "../Asset/sushi3.png";
import sushi4 from "../Asset/sushi4.png";

const Content2 = () => {
  return (
    <div className="mt-10 py-20">
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="text-[#F63B3B] text-lg font-medium">CUSTOMER FAVORITES</p>
        <h1 className="text-5xl font-bold">Popular Categories</h1>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <div className="shadow-2xl flex flex-col items-center px-[70px] py-5 rounded-[25px]">
          <Categoty
            image={sushi1}
            moreStyle={"rounded-full bg-[#C1F1C6] py-3 px-2 w-[70%]"}
          />
          <Categoty
            text1={"Main Dish"}
            moreStyle={"text-xl font-medium mt-3"}
          />
          <Categoty
            text2={"(86 dishes)"}
            moreStyle={"text-md text-[#555555] font-light mt-3"}
          />
        </div>
        <div className="shadow-2xl flex flex-col items-center px-[70px] py-5 rounded-[25px]">
          <Categoty
            image={sushi2}
            moreStyle={"rounded-full bg-[#C1F1C6] py-0 px-2 w-[70%]"}
          />
          <Categoty
            text1={"Break Fast"}
            moreStyle={"text-xl font-medium mt-3"}
          />
          <Categoty
            text2={"(12 dishes)"}
            moreStyle={"text-md text-[#555555] font-light mt-3"}
          />
        </div>
        <div className="shadow-2xl flex flex-col items-center px-[70px] py-5 rounded-[25px]">
          <Categoty
            image={sushi3}
            moreStyle={"rounded-full bg-[#C1F1C6] py-3 px-2 w-[80%]"}
          />
          <Categoty
            text1={"Sushi Combo"}
            moreStyle={"text-xl font-medium mt-3"}
          />
          <Categoty
            text2={"(Combo of 6)"}
            moreStyle={"text-md text-[#555555] font-light mt-3"}
          />
        </div>
        <div className="shadow-2xl flex flex-col items-center px-[70px] py-5 rounded-[25px]">
          <Categoty
            image={sushi4}
            moreStyle={"rounded-full bg-[#C1F1C6] py-3 px-2 w-[80%]"}
          />
          <Categoty
            text1={"Browse All"}
            moreStyle={"text-xl font-medium mt-3"}
          />
          <Categoty
            text2={"(255 Items)"}
            moreStyle={"text-md text-[#555555] font-light mt-3"}
          />
        </div>
      </div>
    </div>
  );
};

export default Content2;
