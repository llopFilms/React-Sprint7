import { Container } from "./PanellStyled";

const Panell = ({ pagines, idiomes, setPagines, setIdiomes }) => (
  <Container>
    <div>
      <label htmlFor="pagines">Número de pàgines</label>
      <div>
        <input
          id="pagines"
          type="text"
          min="0"
          value={pagines}
          onChange={(e) => setPagines(e.target.value)}
        />
      </div>
    </div>
    <div>
      <label htmlFor="idiomes">Número d'idiomes</label>
      <div>
        <input
          id="idiomes"
          type="text"
          min="0"
          value={idiomes}
          onChange={(e) => setIdiomes(e.target.value)}
        />
      </div>
    </div>
  </Container>
);

export default Panell;
