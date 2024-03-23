import { PiCheckFatBold } from 'react-icons/pi';
import { BiXCircle } from 'react-icons/bi';


const iconTypes = {
  check: <PiCheckFatBold type="check" color="green" />,
  delete: <BiXCircle type="delete" color="red" fontSize="30px" />,
};

function TodoIcon({ type }) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>{iconTypes[type]}</span>
  );
}

export { TodoIcon };
