import { API_DAILY_STATUS_SOFTMANTTO } from "src/constants/modelsApi";
import { STORE_DAILY_STATUSES } from "src/constants/store";
import { setDailyStatuses } from "src/redux/dailyStatusSlice";
import { useListService } from "src/services/services";

export const useDailyStatusService = () =>
  useListService({
    store: STORE_DAILY_STATUSES,
    url: API_DAILY_STATUS_SOFTMANTTO,
    onSaveList: setDailyStatuses,
    listName: STORE_DAILY_STATUSES,
  });
