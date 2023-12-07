const Categoty = ({ image, text1, text2, moreStyle }) => {
  return (
    <div
      className={`${moreStyle}`}
    >
      <img src={image} alt="" />
      {text1} {text2}
    </div>
  );
};

export default Categoty;
