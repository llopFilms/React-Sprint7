import { useState } from "react";
import dayjs from 'dayjs';
import "dayjs/locale/ca";

export const useRegistre = () => {
  const [registre, setRegistre] = useState([]);

  const handleRegistre = (formulari) => {
    formulari.id++;
    formulari.data = dayjs(new Date()).locale("ca-es").format("D MMMM, YYYY");
    const formulariNou = { ...formulari };
    return setRegistre((prev) => [...prev, formulariNou]);
  };

  return {
    registre,
    handleRegistre,
  };
};
