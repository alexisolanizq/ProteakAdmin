import { STORE_JOB_ORDERS } from "src/constants/store";
import { useAddService, useListService } from "src/services/services";
import { API_JOB_ORDERS, API_OT_SOFTMANTTO } from "src/constants/modelsApi";
import { addJobOrders, setJobOrders } from "src/redux/jobOrderSlice";

export const useJobOrderListService = () =>
  useListService({
    store: STORE_JOB_ORDERS,
    // url: API_JOB_ORDERS,
    url: API_OT_SOFTMANTTO,
    onSaveList: setJobOrders,
    listName: STORE_JOB_ORDERS,
  });

export const useJobOrderAddService = () =>
  useAddService({
    url: API_JOB_ORDERS,
    onSaveRow: addJobOrders,
  });
