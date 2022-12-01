import { useState } from "react";
import { useParametres } from "./useParametres";
import { getStorage } from "../utils/localStorage";

export const useFormulari = () => {
  const { parametres } = useParametres();
  console.log(parametres);
  const stringABoolea = (string) => string === "true";

  const [formulari, setFormulari] = useState({
    id: getStorage("id") ?? 0,
    data: getStorage("data") ?? "",
    nomClient: getStorage("NomClient") ?? "",
    nomPressupost: getStorage("NomPressupost") ?? "",
    web: {
      actiu:
        stringABoolea(parametres.get("paginaWeb")) ??
        getStorage("webActiu") ??
        false,
      preu: 500,
    },
    extres: {
      pagines: +parametres.get("paginesWeb") ?? getStorage("paginesWeb") ?? 0,
      idiomes: +parametres.get("idiomesWeb") ?? getStorage("idiomesWeb") ?? 0,
    },
    seo: {
      actiu:
        stringABoolea(parametres.get("campanyaSeo")) ??
        getStorage("seoActiu") ??
        false,
      preu: 300,
    },
    ads: {
      actiu:
        stringABoolea(parametres.get("campanyaAds")) ??
        getStorage("adsActiu") ??
        false,
      preu: 200,
    },
    total: getStorage("total") ?? 0,
  });

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

  const setPagines = (numeroPagines, prev) => {
    if (numeroPagines < 0 || isNaN(numeroPagines)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pagines: numeroPagines, idiomes: prev.extres.idiomes },
      total: calcularTotal("pagines", numeroPagines),
    }));
  };

  const setIdiomes = (numeroIdiomes, prev) => {
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
        return console.log("Opció no disponible!");
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
