import { API_WORKSHOP_SOFTMANTTO } from "src/constants/modelsApi";
import { STORE_WORKSHOPS } from "src/constants/store";
import { setWorkshops } from "src/redux/workshopSlice";
import { useListService } from "src/services/services";

export const useWorkshopListService = () =>
  useListService({
    url: API_WORKSHOP_SOFTMANTTO,
    store: STORE_WORKSHOPS,
    onSaveList: setWorkshops,
    listName: STORE_WORKSHOPS,
  });
