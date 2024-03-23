import { PiCheckFatBold } from "react-icons/pi";
import { BiXCircle } from "react-icons/bi";
import "./TodoIcon.css";
const iconTypes = {
  check: (color) => (
    <PiCheckFatBold className="Icon-svg" type="check" color={color} />
  ),
  delete: (color) => (
    <BiXCircle className="Icon-svg" type="delete" color={color} />
  ),
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
