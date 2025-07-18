import { API_RESUME_REPORT_SOFTMANTTO } from "src/constants/modelsApi";
import { STORE_EQUIPMENT_LIFE_SHEETS } from "src/constants/store";
import { setEquipmentLifeSheets } from "src/redux/equipmentLifeSheetSlice";
import { useListService } from "src/services/services";

export const useEquipmentLifeSheetService = (machine, service, workshop) =>
  useListService({
    store: STORE_EQUIPMENT_LIFE_SHEETS,
    url: API_RESUME_REPORT_SOFTMANTTO(machine, service, workshop),
    onSaveList: setEquipmentLifeSheets,
    listName: STORE_EQUIPMENT_LIFE_SHEETS,
  });
