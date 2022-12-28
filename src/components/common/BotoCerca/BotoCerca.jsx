import { IoSearch } from "react-icons/io5";
import { Icona } from "./BotoCercaStyled.jsx";

const BotoCerca = ({ onClick }) => (
  <Icona>
    <IoSearch onClick={onClick} />
  </Icona>
);

export default BotoCerca;
