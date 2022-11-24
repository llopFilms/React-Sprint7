import { getStorage } from "../utils/localStorage";
import dayjs from "dayjs";
import "dayjs/locale/ca";

export const formulariInicial = {
  id: getStorage("id") ?? 0,
  data:
    getStorage("data") ??
    dayjs(new Date()).locale("ca-es").format("D  MMMM, YYYY"),
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
