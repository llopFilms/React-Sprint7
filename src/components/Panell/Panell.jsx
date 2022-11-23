import { Container } from "./PanellStyled";
import Boto from "../../components/common/Boto/Boto";
import BotoInfo from "../../components/common/BotoInfo/BotoInfo";

const Panell = ({
  pagines,
  idiomes,
  setPagines,
  setIdiomes,
  handleClick,
  handleModalInfo,
}) => {
  return (
    <Container>
      <div>
        <label htmlFor="pagines">Número de pàgines</label>
        <div>
          <Boto
            id="paginesInc"
            value="+"
            onClick={(e) => handleClick(e.target.id)}
          />
          <input
            id="pagines"
            type="text"
            min="0"
            value={pagines}
            onChange={(e) => setPagines(+e.target.value)}
          />
          <Boto
            id="paginesDec"
            value="-"
            onClick={(e) => handleClick(e.target.id)}
          />
          <BotoInfo
            id="infoPagines"
            onClick={(e) => handleModalInfo(e.target.id)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="idiomes">Número d'idiomes</label>
        <div>
          <Boto
            id="idiomesInc"
            value="+"
            onClick={(e) => handleClick(e.target.id)}
          />
          <input
            id="idiomes"
            type="text"
            min="0"
            value={idiomes}
            onChange={(e) => setIdiomes(+e.target.value)}
          />
          <Boto
            id="idiomesDec"
            value="-"
            onClick={(e) => handleClick(e.target.id)}
          />
          <BotoInfo
            id="infoIdiomes"
            onClick={(e) => handleModalInfo(e.target.id)}
          />
        </div>
      </div>
    </Container>
  );
};

export default Panell;
