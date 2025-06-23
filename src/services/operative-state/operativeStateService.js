import { useListService } from "../services";
import { API_OPERATIVE_STATE_SOFTMANTTO } from "src/constants/modelsApi";
import {STORE_OPERATIVE_STATE_MACHINE} from "src/constants/store";
import { setOperativeState } from "src/redux/operativeState";

export const useOperativeStateListService = (idmatri = null) =>
  useListService({
    store: STORE_OPERATIVE_STATE_MACHINE,
    url: API_OPERATIVE_STATE_SOFTMANTTO(idmatri),
    onSaveList: setOperativeState,
    listName: STORE_OPERATIVE_STATE_MACHINE,
  });
