import { useState } from "react";

export const useRegistre = () => {
  const [registre, setRegistre] = useState([]);

  const handleRegistre = (formulari) => {
    formulari.id++;
    const formulariNou = { ...formulari }
    setRegistre((prev) => {
      return [...prev, formulariNou];
    });
  };

  return {
    registre,
    setRegistre,
    handleRegistre,
  };
};
