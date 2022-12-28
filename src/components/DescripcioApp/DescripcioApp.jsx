import { Link } from "react-router-dom";
import { Container } from "./DescripcioAppStyled";

const DescripcioApp = () => (
  <Container>
    <p>
      Benvinguts a l'aplicació destinada al càlcul i registre de pressupostos. Podeu escollir el tipus de pressupost d'entre les següents possibilitats:
    </p>
    <ul>
      <li>Pàgina web</li>
      <li>Consultoria SEO</li>
      <li>Campanya amb Google Ads</li>
    </ul>
    <p>Igualment, permet ajustar el preu amb les següents possibilitats extra:</p>
    <ul>
      <li>Número de pàgines</li>
      <li>Número d'idiomes</li>
    </ul>
    <ul>
      <li>
        <span>Per consultar l'aplicació de càlcul, premeu&nbsp;</span>
        <Link className="link" to="inici">
          aquí
        </Link>
      </li>
    </ul>
  </Container>
);

export default DescripcioApp;
