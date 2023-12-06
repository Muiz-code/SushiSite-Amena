import search from "../Asset/Search.svg";
import cart from "../Asset/Cart.svg";
import phone from "../Asset/Phone.svg";
import LandingPage from "./LandingPage";
import Content2 from "./Content2";
import Button from "./Button";

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
          <ul className="flex gap-5 text-lg">
            <li className="text-[#39DB4A]">Home</li>
            <li>
              <select name="cars" id="cars">
                <option value="volvo">Menu</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
            <li>About Us</li>
            <li>
              <select name="cars" id="cars">
                <option value="volvo">Services</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
            <li>Offers</li>
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
    </div>
  );
};

export default NavBar;
