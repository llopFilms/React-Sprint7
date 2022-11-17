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
    total: 0,
  });

  const calcularTotal = (valor) => {
    switch (valor) {
      case "web": {
        if (formulari.web.actiu) return formulari.total - formulari.web.preu;
        return formulari.total + formulari.web.preu;
      }
      case "seo": {
        if (formulari.seo.actiu) return formulari.total - formulari.seo.preu;
        return formulari.total + formulari.seo.preu;
      }
      case "ads": {
        if (formulari.ads.actiu) return formulari.total - formulari.ads.preu;
        return formulari.total + formulari.ads.preu;
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

  return { formulari, setOpcio };
};

export default useFormulari;
