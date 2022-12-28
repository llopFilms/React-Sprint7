import { Overlay, Container } from "./ModalInfoStyled";
import BotoInfo from "../../components/common/BotoInfo/BotoInfo";

const ModalInfo = ({ id, onClick, text, idp, ids, valor }) => (
  <Overlay onClick={onClick} id={id}>
    <Container onClick={(e) => e.stopPropagation()}>
      <div>
        <BotoInfo />
        <h3>Info d'ajuda</h3>
      </div>
      <p>{text}</p>
      <ul>
        <li>
          El número {idp} és:<span> {valor}</span>
        </li>
        <li>
          El preu per {ids} és de: <span>30€</span>
        </li>
        <li>
          Preu total {idp}: <span>{valor * 30}€</span>
        </li>
      </ul>
    </Container>
  </Overlay>
);

export default ModalInfo;
