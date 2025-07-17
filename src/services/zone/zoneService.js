import { API_ZONE_SOFTMANTTO, API_ZONES_SOFTMANTTO } from "src/constants/modelsApi";
import { useGET } from "src/utils/api";



export const useZoneListService = () => useGET({
    url: API_ZONES_SOFTMANTTO,
    nameQuery: `zones`
})

export const useZoneService = (idmatri) => useGET({
    url: API_ZONE_SOFTMANTTO(idmatri),
    nameQuery: `zone${idmatri}`
})