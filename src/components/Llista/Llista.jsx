import ItemLlista from "../ItemLlista/ItemLlista";
import LlistaBuida from "./LlistaBuida";
import { Container } from "./llistaStyled";

const Llista = ({ llistaOrdenada }) => {
  return (
    <Container>
      {!llistaOrdenada.length ? (
        <LlistaBuida />
      ) : (
        <ul style={{ width: "100%" }}>
          {llistaOrdenada.map((pressupost) => (
            <ItemLlista key={pressupost.id} pressupost={pressupost} />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Llista;
