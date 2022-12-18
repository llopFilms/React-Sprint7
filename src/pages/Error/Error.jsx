import { useNavigate } from "react-router-dom";
import { Container } from "../common/BasicContainerStyled.jsx";
import { Img, BotoCalcul } from "./ErrorStyled";
import error404 from "../../assets/img/error404.png";

const Error = () => {
  const navega = useNavigate();
  return (
    <Container style={{justifyContent: "space-between"}}>
      <h2>404 - Pàgina no trobada</h2>
      <Img src={error404} alt="error 404" />
      <BotoCalcul className="boto" onClick={() => navega(process.env.PUBLIC_URL + "/")}>
        Tornar...
      </BotoCalcul>
    </Container>
  );
};

export default Error;
