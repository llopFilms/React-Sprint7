import { useState } from "react";
import { textPagines, textIdiomes } from "../data/textosModal";
import { getStorage } from "../utils/localStorage";

export const useModal = () => {
  const [modal, setModal] = useState({
    obert: false,
    idp: "",
    ids: "",
    text: "",
    valor: 0,
  });

  const handleModalInfo = (id) => {
    switch (id) {
      case "infoPagines":
        setModal({
          obert: true,
          idp: "de pàgines",
          ids: "pàgina",
          text: textPagines,
          valor: getStorage("paginesWeb") ?? 0,
        });
        return;
      case "infoIdiomes":
        setModal({
          obert: true,
          idp: "d'idiomes",
          ids: "idioma",
          text: textIdiomes,
          valor: getStorage("idiomesWeb") ?? 0,
        });
        return;
      case "modal":
        setModal((prev) => !prev.obert);
        return;
      default:
        return;
    }
  };

  return { modal, handleModalInfo };
};
