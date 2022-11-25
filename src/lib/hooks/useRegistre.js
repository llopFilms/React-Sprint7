import { useState } from "react";
import dayjs from "dayjs";
import { getStorage } from "../utils/localStorage";
import "dayjs/locale/ca";

export const useRegistre = () => {
  const [registre, setRegistre] = useState(getStorage("registre") ?? []);

  const handleRegistre = (formulari) => {
    formulari.id++;
    formulari.data = dayjs(new Date()).locale("ca-es").format("D MMMM, YYYY");
    const formulariNou = { ...formulari };
    return setRegistre((prev) => [...prev, formulariNou]);
  };

  const esborrarPressupost = (id) => {
    return setRegistre(registre.filter((element) => element.id !== id));
  };

  return {
    registre,
    handleRegistre,
    esborrarPressupost,
  };
};
