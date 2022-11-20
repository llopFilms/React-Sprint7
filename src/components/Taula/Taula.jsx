import useFormulari from "../../lib/hooks/useFormulari";
import { useEffect } from "react";
import { setStorage } from "../../lib/utils/localStorage";
import Panell from "../Panell/Panell";
import { Container } from "./TaulaStyled";

const Taula = () => {
  const { formulari, setOpcio, setPagines, setIdiomes, handleClick } =
    useFormulari();

  const {
    web: { actiu: webActiu },
    seo: { actiu: seoActiu },
    ads: { actiu: adsActiu },
    extres: { pagines, idiomes },
    total,
  } = formulari;

  useEffect(() => {
    setStorage("webActiu", webActiu);
    setStorage("paginesWeb", pagines);
    setStorage("idiomesWeb", idiomes);
    setStorage("seoActiu", seoActiu);
    setStorage("adsActiu", adsActiu);
    setStorage("total", total);
  }, [webActiu, seoActiu, adsActiu, pagines, idiomes, total]);

  return (
    <Container className="taula">
      <h2>Què vols fer?</h2>
      <div>
        <label htmlFor="inputWeb">
          <input
            id="inputWeb"
            type="checkbox"
            checked={webActiu}
            onChange={(e) => setOpcio("web")}
          />
          Una pàgina web (500€)
        </label>
        {webActiu && (
          <Panell
            pagines={pagines}
            idiomes={idiomes}
            setPagines={setPagines}
            setIdiomes={setIdiomes}
            handleClick={handleClick}
          />
        )}
        <label htmlFor="inputSeo">
          <input
            id="inputSeo"
            type="checkbox"
            checked={seoActiu}
            onChange={(e) => setOpcio("seo")}
          />
          Una consultoria SEO (300€)
        </label>
        <label htmlFor="inputAds">
          <input
            id="inputAds"
            type="checkbox"
            checked={adsActiu}
            onChange={(e) => setOpcio("ads")}
          />
          Una campanya de Google Ads (200€)
        </label>
        <p>Preu:&nbsp;{total}€</p>
      </div>
    </Container>
  );
};

export default Taula;
