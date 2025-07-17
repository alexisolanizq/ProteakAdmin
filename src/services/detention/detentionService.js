import { API_DETENTIONS_BY_MATRI_SOFTMANTTO } from "src/constants/modelsApi";
import { useListService } from "../services";
import { STORE_DETENTIONS } from "src/constants/store";
import { setDetentions } from "src/redux/detentionSlice";

export const useDetentionListService = ({ matri, enable }) =>
  useListService({
    store: STORE_DETENTIONS,
    url: API_DETENTIONS_BY_MATRI_SOFTMANTTO(matri),
    listName: STORE_DETENTIONS,
    onSaveList: setDetentions,
    enable,
  });
