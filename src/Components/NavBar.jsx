import search from "../Asset/Search.svg";
import cart from "../Asset/Cart.svg";
import phone from "../Asset/Phone.svg";
import LandingPage from "./LandingPage";
import Content2 from "./Content2";
import Button from "./Button";
import NavList from "./NavList";
import DropDown from "./DropDown";
import Content3 from "./Content3";

const NavBar = () => {
  return (
    <div className="py-10 px-10 flex flex-col">
      <nav className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl">
            {" "}
            <span className="bg-[#39DB4A] rounded-2xl text-white px-2">S</span>
            ushi
          </h1>
        </div>
        <div>
          <ul className="flex gap-8">
            <NavList link={"Home"} style={"text-[#39DB4A]"} />
            <DropDown
              dropdown={"Menu"}
              dropdownlist1={"Order"}
              dropdownlist2={"Review"}
              dropdownlist3={"Payment"}
            />
            <NavList link={"About Us"} />
            <DropDown
              dropdown={"Services"}
              dropdownlist1={"Career"}
              dropdownlist2={"We make you feel fly"}
              dropdownlist3={"Call Us"}
            />
            <NavList link={"Offer"} />
          </ul>
        </div>
        <div className="flex gap-6">
          <img src={cart} alt="" />
          <img src={search} alt="" />
          <Button image={phone} text={"Contact"} />
        </div>
      </nav>
      <div>
        <LandingPage />
      </div>
      <div>
        <Content2 />
      </div>
      <div>
        <Content3 />
      </div>
    </div>
  );
};

export default NavBar;
