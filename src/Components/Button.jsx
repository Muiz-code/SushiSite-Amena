const Button = ({ image, text, moreStyle }) => {
  return (
    <button
      className={`${
        image ? `flex items-center gap-3` : "" 
      } ${moreStyle} bg-[#39DB4A] text-white rounded-3xl px-7 py-2`}
    >
      <img src={image} alt="" />
      {text}
    </button>
  );
};

export default Button;
