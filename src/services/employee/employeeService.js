import { API_EMPLOYEES_SOFTMANTTO } from "src/constants/modelsApi";
import { useListService } from "../services";
import { STORE_EMPLOYEES } from "src/constants/store";
import { setEmployees } from "src/redux/employeeSlice";

export const useEmployeeListService = () =>
  useListService({
    url: API_EMPLOYEES_SOFTMANTTO,
    store: STORE_EMPLOYEES,
    listName: STORE_EMPLOYEES,
    onSaveList: setEmployees,
  });
