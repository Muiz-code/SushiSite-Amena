const DropDown = ({
  dropdown,
  dropdownlist1,
  dropdownlist2,
  dropdownlist3,
}) => {
  return (
    <ul>
      <li>
        <select name="cars" id="cars">
          <option value="volvo">{dropdown}</option>
          <option value="saab">{dropdownlist1}</option>
          <option value="mercedes">{dropdownlist2}</option>
          <option value="audi">{dropdownlist3}</option>
        </select>
      </li>
    </ul>
  );
};

export default DropDown;
