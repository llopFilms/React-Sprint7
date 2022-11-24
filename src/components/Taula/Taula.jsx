import { useFormulari } from "../../lib/hooks/useFormulari";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setStorage } from "../../lib/utils/localStorage";
import Panell from "../Panell/Panell";
import {
  Container,
  BotoCalcul,
  ContainerTaula,
  Container2,
  BotoRegistre,
} from "./TaulaStyled";
import ModalInfo from "../ModalInfo/ModalInfo";
import { useModal } from "../../lib/hooks/useModal";
import { useRegistre } from "../../lib/hooks/useRegistre";
import Llista from "../Llista/Llista";

const Taula = () => {
  const navega = useNavigate();

  const { formulari, setDades, setOpcio, setPagines, setIdiomes, handleClick } =
    useFormulari();

  const {
    nomClient,
    nomPressupost,
    web: { actiu: webActiu },
    extres: { pagines, idiomes },
    seo: { actiu: seoActiu },
    ads: { actiu: adsActiu },
    total,
  } = formulari;

  const { registre, handleRegistre } = useRegistre();
  const llista = [...registre];
  
  const { modal, handleModalInfo } = useModal();
  const { obert, idp, ids, text, valor } = modal;

  useEffect(() => {
    setStorage("nomClient", nomClient);
    setStorage("nomPressupost", nomPressupost);
    setStorage("webActiu", webActiu);
    setStorage("paginesWeb", pagines);
    setStorage("idiomesWeb", idiomes);
    setStorage("seoActiu", seoActiu);
    setStorage("adsActiu", adsActiu);
    setStorage("total", total);
  }, [nomClient, nomPressupost, webActiu, seoActiu, adsActiu, pagines, idiomes, total]);

  return (
    <div style={{ width: "100%", height: "50rem" }}>
      <ContainerTaula>
        <Container>
          <h2>Què vols fer?</h2>
          <div>
            <div>
              <label htmlFor="nomClient">Nom Client</label>
              <input
                id="nomClient"
                type="text"
                min="0"
                value={nomClient}
                onChange={(e) => setDades(e.target.id, e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="nomPressupost">Nom Pressuspost</label>
              <input
                id="nomPressupost"
                type="text"
                min="0"
                value={nomPressupost}
                onChange={(e) => setDades(e.target.id, e.target.value)}
              />
            </div>
            <hr />
            <label htmlFor="inputWeb">
              <input
                id="inputWeb"
                type="checkbox"
                checked={webActiu}
                onChange={(e) => setOpcio("web")}
              />
              Una pàgina web (500 €)
            </label>
            {webActiu && (
              <Panell
                pagines={pagines}
                idiomes={idiomes}
                setPagines={setPagines}
                setIdiomes={setIdiomes}
                handleClick={handleClick}
                handleModalInfo={handleModalInfo}
              />
            )}
            <label htmlFor="inputSeo">
              <input
                id="inputSeo"
                type="checkbox"
                checked={seoActiu}
                onChange={(e) => setOpcio("seo")}
              />
              Una consultoria SEO (300 €)
            </label>
            <label htmlFor="inputAds">
              <input
                id="inputAds"
                type="checkbox"
                checked={adsActiu}
                onChange={(e) => setOpcio("ads")}
              />
              Una campanya de Google Ads (200 €)
            </label>
            <hr />
            <div className="total">
              <p>Preu:&nbsp;{total}&nbsp;€</p>
              <BotoRegistre onClick={(e) => handleRegistre(formulari)}>
                Registrar Pressupost
              </BotoRegistre>
            </div>
          </div>
        </Container>
        <Container2>
          <h2>Llista pressupostos</h2>
          <Llista llista={llista} />
        </Container2>
        {obert && (
          <ModalInfo
            id="modal"
            onClick={(e) => handleModalInfo(e.target.id)}
            idp={idp}
            ids={ids}
            text={text}
            valor={valor}
          />
        )}
        <BotoCalcul onClick={() => navega("/")}>Tornar...</BotoCalcul>
      </ContainerTaula>
    </div>
  );
};

export default Taula;
