import { useState } from "react";
import { formulariInicial } from "../constants/formulariInicial";

export const useFormulari = () => {
  const [formulari, setFormulari] = useState(formulariInicial);

  const {
    //id,
    //data,
    //nomClient,
    //nomPressupost,
    web: { actiu: webActiu, preu: webPreu },
    extres: { pagines, idiomes },
    seo: { actiu: seoActiu, preu: seoPreu },
    ads: { actiu: adsActiu, preu: adsPreu },
    total,
  } = formulari;

  const calcularExtres = (valor, numero) => {
    let sumaExtres = 0;
    if (seoActiu) sumaExtres += seoPreu;
    if (adsActiu) sumaExtres += adsPreu;
    if (webActiu) sumaExtres += webPreu;
    valor === "pagines"
      ? (sumaExtres += numero * 30 + idiomes * 30)
      : (sumaExtres += pagines * 30 + numero * 30);
    return sumaExtres;
  };

  const calcularTotal = (valor, numero) => {
    switch (valor) {
      case "web": {
        return webActiu
          ? total - webPreu - pagines * 30 - idiomes * 30
          : total + webPreu + pagines * 30 + idiomes * 30;
      }
      case "seo": {
        return seoActiu ? total - seoPreu : total + seoPreu;
      }
      case "ads": {
        return adsActiu ? total - adsPreu : total + adsPreu;
      }
      case "pagines": {
        return calcularExtres("pagines", numero);
      }
      case "idiomes": {
        return calcularExtres("idiomes", numero);
      }
      default:
        break;
    }
  };

  const setDades = (clau, valor) => {
    setFormulari((prev) => ({
      ...prev,
      [clau]: valor,
    }));
  };

  const setOpcio = (clau) => {
    setFormulari((prev) => ({
      ...prev,
      [clau]: { actiu: !prev[clau].actiu, preu: prev[clau].preu },
      total: calcularTotal(clau),
    }));
  };

  const setPagines = (numeroPagines) => {
    if (numeroPagines < 0 || isNaN(numeroPagines)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pagines: numeroPagines, idiomes: prev.extres.idiomes },
      total: calcularTotal("pagines", numeroPagines),
    }));
  };

  const setIdiomes = (numeroIdiomes) => {
    if (numeroIdiomes < 0 || isNaN(numeroIdiomes)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pagines: prev.extres.pagines, idiomes: numeroIdiomes },
      total: calcularTotal("idiomes", numeroIdiomes),
    }));
  };

  const handleClick = (id) => {
    switch (id) {
      case "paginesInc":
        setPagines(pagines ? pagines + 1 : 1);
        break;
      case "paginesDec":
        setPagines(pagines - 1);
        break;
      case "idiomesInc":
        setIdiomes(idiomes ? idiomes + 1 : 1);
        break;
      case "idiomesDec":
        setIdiomes(idiomes - 1);
        break;
      default:
        return;
    }
  };

  return {
    formulari,
    setFormulari,
    setDades,
    setOpcio,
    setPagines,
    setIdiomes,
    handleClick,
  };
};
