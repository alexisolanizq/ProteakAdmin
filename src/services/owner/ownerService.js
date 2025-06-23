import { API_OWNER_SOFTMANTTO } from "src/constants/modelsApi";
import { useGET } from "src/utils/api";

export const useOwnerService = () =>
  useGET({
    url: API_OWNER_SOFTMANTTO,
    nameQuery: "ownerQuery",
  });
