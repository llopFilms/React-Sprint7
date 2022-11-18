import { useState } from "react";

const useFormulari = () => {
  const [formulari, setFormulari] = useState({
    web: {
      actiu: false,
      preu: 500,
    },
    seo: {
      actiu: false,
      preu: 300,
    },
    ads: {
      actiu: false,
      preu: 200,
    },
    extres: {
      pagines: 0,
      idiomes: 0,
    },
    total: 0,
  });

  const calcularExtres = (valor, numero) => {
    let extres = 0;
    if (formulari.web.actiu) extres += formulari.web.preu;
    if (formulari.seo.actiu) extres += formulari.seo.preu;
    if (formulari.ads.actiu) extres += formulari.ads.preu;
    valor === "pagines"
      ? (extres += numero * 30 + formulari.extres.idiomes * 30)
      : (extres += formulari.extres.pagines * 30 + numero * 30);
    return extres;
  };

  const calcularTotal = (valor, numero) => {
    switch (valor) {
      case "web": {
        return formulari.web.actiu
          ? formulari.total - formulari.web.preu
          : formulari.total + formulari.web.preu;
      }
      case "seo": {
        return formulari.seo.actiu
          ? formulari.total - formulari.seo.preu
          : formulari.total + formulari.seo.preu;
      }
      case "ads": {
        return formulari.ads.actiu
          ? formulari.total - formulari.ads.preu
          : formulari.total + formulari.ads.preu;
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

  const setOpcio = (valor) => {
    setFormulari((prev) => ({
      ...prev,
      [valor]: { actiu: !prev[valor].actiu, preu: prev[valor].preu },
      total: calcularTotal(valor),
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
        setPagines(formulari.extres.pagines ? formulari.extres.pagines + 1 : 1);
        break;
      case "paginesDec":
        setPagines(formulari.extres.pagines - 1);
        break;
      case "idiomesInc":
        setIdiomes(formulari.extres.idiomes ? formulari.extres.idiomes + 1 : 1);
        break;
      case "idiomesDec":
        setIdiomes(formulari.extres.idiomes - 1);
        break;
      default:
        return;
    }
  };

  return { formulari, setOpcio, setPagines, setIdiomes, handleClick };
};

export default useFormulari;
