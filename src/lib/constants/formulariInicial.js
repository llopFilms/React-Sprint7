import { getStorage } from "../utils/localStorage";

export const FORMULARI_INICIAL = {
  id: getStorage("id") ?? 0,
  data: getStorage("data") ?? "",
  nomClient: getStorage("NomClient") ?? "",
  nomPressupost: getStorage("NomPressupost") ?? "",
  web: {
    actiu: getStorage("webActiu") ?? false,
    preu: 500,
  },
  extres: {
    pagines: getStorage("paginesWeb") ?? 0,
    idiomes: getStorage("idiomesWeb") ?? 0,
  },
  seo: {
    actiu: getStorage("seoActiu") ?? false,
    preu: 300,
  },
  ads: {
    actiu: getStorage("adsActiu") ?? false,
    preu: 200,
  },
  total: getStorage("total") ?? 0,
};
