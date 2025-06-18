import { API_USAGE_SHEETS_SOFTMANTTO } from "src/constants/modelsApi";
import { STORE_USAGE_SHEETS } from "src/constants/store";
import { setUsageSheets } from "src/redux/usageSheetSlice";
import { useListService } from "src/services/services";

export const useUsageSheetService = ({
  timestamp_start,
  timestamp_end,
  enable,
}) =>
  useListService({
    enable,
    store: STORE_USAGE_SHEETS,
    url: API_USAGE_SHEETS_SOFTMANTTO({ timestamp_start, timestamp_end }),
    onSaveList: setUsageSheets,
    listName: STORE_USAGE_SHEETS,
  });
