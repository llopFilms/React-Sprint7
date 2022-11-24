import ItemLlista from "../ItemLlista/ItemLlista";
import LlistaBuida from "./LlistaBuida";
import { Container } from "./llistaStyled";

const Llista = ({ llista }) => {
  return (
    <Container>
      {llista.length === 0 ? <LlistaBuida/> :
        <ul style={{ width: "100%" }}>
          {llista.map((pressupost) => (
            <ItemLlista key={pressupost.id} pressupost={pressupost} />
          ))}
        </ul>}
    </Container>
  );
};

export default Llista;
