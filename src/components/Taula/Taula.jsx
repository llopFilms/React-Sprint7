import { useFormulari } from "../../lib/hooks/useFormulari";
import { useParametres } from "../../lib/hooks/useParametres";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { ordenarLlista } from "../../lib/utils/ordenarLlista";
import BotoCerca from "../common/BotoCerca/BotoCerca";

const Taula = () => {
  const navega = useNavigate();

  const { formulari, setDades, setOpcio, setPagines, setIdiomes, handleClick } =
    useFormulari();

  const {
    id,
    data,
    nomClient,
    nomPressupost,
    web: { actiu: webActiu },
    extres: { pagines, idiomes },
    seo: { actiu: seoActiu },
    ads: { actiu: adsActiu },
    total,
  } = formulari;

  const { registre, handleRegistre, esborrarPressupost } = useRegistre();

  const [ordre, setOrdre] = useState("perDefecte");
  const [cerca, setCerca] = useState("");

  const llistaOrdenada = ordenarLlista(ordre, registre, cerca, setCerca);

  const { modal, handleModalInfo } = useModal();
  const { obert, idp, ids, text, valor } = modal;

  const { setParametres } = useParametres();

  useEffect(() => {
    setStorage("id", id);
    setStorage("data", data);
    setStorage("nomClient", nomClient);
    setStorage("nomPressupost", nomPressupost);
    setStorage("webActiu", webActiu);
    setStorage("paginesWeb", pagines);
    setStorage("idiomesWeb", idiomes);
    setStorage("seoActiu", seoActiu);
    setStorage("adsActiu", adsActiu);
    setStorage("total", total);
    setStorage("registre", registre);
    setParametres({
      paginaWeb: webActiu,
      campanyaSeo: seoActiu,
      campanyaAds: adsActiu,
      paginesWeb: pagines,
      idiomesWeb: idiomes,
    });
  }, [
    id,
    data,
    nomClient,
    nomPressupost,
    webActiu,
    seoActiu,
    adsActiu,
    pagines,
    idiomes,
    total,
    registre,
    setParametres,
  ]);

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
              <label htmlFor="nomPressupost">Nom Pressupost</label>
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
              Pàgina web (500 €)
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
              Consultoria SEO (300 €)
            </label>
            <label htmlFor="inputAds">
              <input
                id="inputAds"
                type="checkbox"
                checked={adsActiu}
                onChange={(e) => setOpcio("ads")}
              />
              Campanya de Google Ads (200 €)
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
          <div>
            <BotoRegistre onClick={(e) => setOrdre("alfabetic")}>
              Ordre Alfabètic
            </BotoRegistre>
            <BotoRegistre onClick={(e) => setOrdre("cronologic")}>
              Ordre Cronològic
            </BotoRegistre>
            <BotoRegistre onClick={(e) => setOrdre("perDefecte")}>
              Ordre de Registre
            </BotoRegistre>
          </div>
          <div>
            <label htmlFor="nomCerca">Cerca: </label>
            <input
              id="nomCerca"
              type="text"
              min="0"
              value={cerca}
              onChange={(e) => setCerca(e.target.value)}
            />
            <BotoCerca onClick={(e) => setOrdre("cerca")} />
          </div>
          <Llista
            llistaOrdenada={llistaOrdenada}
            esborrarPressupost={esborrarPressupost}
          />
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
        <BotoCalcul onClick={() => navega(process.env.PUBLIC_URL + "/")}>
          Tornar...
        </BotoCalcul>
      </ContainerTaula>
    </div>
  );
};

export default Taula;
