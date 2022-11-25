export const ordenarLlista = (ordre, registre, cerca) => {
  switch (ordre) {
    case "alfabetic":
      return [...registre].sort(
        (previ, actual) =>
          previ.nomPressupost.toLowerCase() > actual.nomPressupost.toLowerCase()
      );
    case "cronologic":
      return [...registre].sort((previ, actual) => previ.data + actual.data);
    case "cerca":
      const trobat = registre.filter((element) => element.nomPressupost.toLowerCase().includes(cerca));
      return trobat
    case "perDefecte":
      return registre;
    default:
      return console.log("Opció no disponible");
  }
};
