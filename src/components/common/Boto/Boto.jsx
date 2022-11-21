import { Button } from "./BotoStyled";

const Boto = ({ style, id, onClick, value }) => (
  <Button style={style} id={id} onClick={onClick}>
    {value}
  </Button>
);

export default Boto;
