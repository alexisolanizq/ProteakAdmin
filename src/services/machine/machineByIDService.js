import { API_MACHINE_BY_ID_SOFTMANTTO } from "src/constants/modelsApi";
import { useGET } from "src/utils/api";

export const useMachineRowService = (id) =>
  useGET({
    url: `${API_MACHINE_BY_ID_SOFTMANTTO}/${id}`,
    nameQuery: `rowMachine${id}`,
  });