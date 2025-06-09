import { API_CECOS_SOFTMANTTO } from "src/constants/modelsApi";
import { STORE_CECOS } from "src/constants/store";
import { setCecos } from "src/redux/cecoSlice";
import { useListService } from "src/services/services";

export const useCecoListService = () =>
  useListService({
    store: STORE_CECOS,
    url: `${API_CECOS_SOFTMANTTO}`,
    onSaveList: setCecos,
    listName: STORE_CECOS
  });
