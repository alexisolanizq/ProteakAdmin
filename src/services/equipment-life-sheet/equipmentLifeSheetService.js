import { API_EQUIPMENT_LIFE_SHEET_SOFTMANTTO } from "src/constants/modelsApi";
import { STORE_EQUIPMENT_LIFE_SHEETS } from "src/constants/store";
import { setEquipmentLifeSheets } from "src/redux/equipmentLifeSheetSlice";
import { useListService } from "src/services/services";

export const useEquipmentLifeSheetService = () =>
  useListService({
    store: STORE_EQUIPMENT_LIFE_SHEETS,
    url: API_EQUIPMENT_LIFE_SHEET_SOFTMANTTO,
    onSaveList: setEquipmentLifeSheets,
    listName: STORE_EQUIPMENT_LIFE_SHEETS,
  });
