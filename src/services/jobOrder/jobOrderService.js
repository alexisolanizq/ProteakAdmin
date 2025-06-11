import { STORE_JOB_ORDERS } from "src/constants/store";
import { useAddService, useListService } from "src/services/services";
import {
  API_JOB_ORDERS,
  API_MACHINE_OT_SOFTMANTTO,
  API_OT_SOFTMANTTO,
} from "src/constants/modelsApi";
import { addJobOrders, setJobOrders } from "src/redux/jobOrderSlice";
import { useGET } from "src/utils/api";

export const useJobOrderListService = () =>
  useListService({
    store: STORE_JOB_ORDERS,
    url: API_OT_SOFTMANTTO,
    onSaveList: setJobOrders,
    listName: STORE_JOB_ORDERS,
  });

export const useJobOrderAddService = () =>
  useAddService({
    url: API_JOB_ORDERS,
    onSaveRow: addJobOrders,
  });

export const useJobOrderByIDService = (id) =>
  useGET({
    url: API_MACHINE_OT_SOFTMANTTO({ ot: id }),
    nameQuery: `jobOrderService${id}`,
  });
