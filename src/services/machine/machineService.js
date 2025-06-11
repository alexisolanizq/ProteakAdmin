import {
  API_MACHINE_MATERIALS_SERVICE,
  API_MACHINE_SERVICES,
  // API_MACHINES,
  API_MACHINES_SOFTMANTTO,
} from "src/constants/modelsApi";
import { STORE_MACHINES } from "src/constants/store";
import { setMachines } from "src/redux/machineSlice";
import { useListService } from "src/services/services";
import { useGET } from "src/utils/api";

export const useMachineListService = () =>
  useListService({
    store: STORE_MACHINES,
    url: API_MACHINES_SOFTMANTTO,
    // url: API_MACHINES,
    onSaveList: setMachines,
    listName: STORE_MACHINES,
  });

export const useMachineServices = (id) =>
  useGET({
    url: API_MACHINE_SERVICES({ id }),
    nameQuery: `machineServices${id}`,
  });

export const useMachineMaterialsService = (id) =>
  useGET({
    url: API_MACHINE_MATERIALS_SERVICE({ id }),
    nameQuery: `machineMaterialsService${id}`,
  });
