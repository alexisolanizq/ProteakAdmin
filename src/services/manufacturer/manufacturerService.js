import { API_MANUFACTURERS_SOFTMANTTO } from "src/constants/modelsApi";
import { useGET } from "src/utils/api";

export const useManufacturerListService = () =>
  useGET({
    url: API_MANUFACTURERS_SOFTMANTTO,
    nameQuery: "manufacturerList",
  });
