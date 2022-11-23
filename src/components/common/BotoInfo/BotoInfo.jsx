import { IoAlertCircleOutline } from "react-icons/io5";
import { Icona } from "./BotoInfoStyled.jsx";

const BotoInfo = ({ id, onClick }) => (
  <Icona>
    <IoAlertCircleOutline onClick={onClick} id={id} />
  </Icona>
);

export default BotoInfo;
