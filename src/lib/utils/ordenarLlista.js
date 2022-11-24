export const ordenarLlista = (ordre, registre) => {
  switch (ordre) {
    case "alfabetic":
      return [...registre].sort(
        (previ, actual) =>
          previ.nomClient.toLowerCase() > actual.nomClient.toLowerCase()
      );
    case "cronologic":
      return [...registre].sort((previ, actual) => previ.data + actual.data);
    default:
      return registre;
  }
};
