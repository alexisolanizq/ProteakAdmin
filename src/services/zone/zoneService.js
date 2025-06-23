import { API_ZONE_SOFTMANTTO } from "src/constants/modelsApi";
import { useGET } from "src/utils/api";


export const useZoneService = (idmatri) => useGET({
    url: API_ZONE_SOFTMANTTO(idmatri),
    nameQuery: `zone${idmatri}`
})