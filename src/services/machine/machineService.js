import {
  // API_MACHINES,
  API_MACHINES_SOFTMANTTO,
} from "src/constants/modelsApi";
import { STORE_MACHINES } from "src/constants/store";
import { setMachines } from "src/redux/machineSlice";
import { useListService } from "src/services/services";

export const useMachineListService = () =>
  useListService({
    store: STORE_MACHINES,
    url: API_MACHINES_SOFTMANTTO,
    // url: API_MACHINES,
    onSaveList: setMachines,
    listName: STORE_MACHINES,
  });
