const NavList = ({ link, style }) => {
  return (
    <ul className={`${style} flex gap-5 text-lg`}>
      <li className="">{link}</li>
    </ul>
  );
};

export default NavList;
