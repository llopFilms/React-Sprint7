import { getStorage } from "../utils/localStorage";

export const formulariInicial = {
  web: {
    actiu: getStorage("webActiu") ?? false,
    preu: 500,
  },
  seo: {
    actiu: getStorage("seoActiu") ?? false,
    preu: 300,
  },
  ads: {
    actiu: getStorage("adsActiu") ?? false,
    preu: 200,
  },
  extres: {
    pagines: getStorage("paginesWeb") ?? 0,
    idiomes: getStorage("idiomesWeb") ?? 0,
  },
  total: getStorage("total") ?? 0,
};
