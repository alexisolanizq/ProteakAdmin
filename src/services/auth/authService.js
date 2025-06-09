import {
  // API_AUTH_LOGIN,
  API_AUTH_REGISTER,
  API_LOGIN_SOFTMANTTO,
} from "src/constants/modelsApi";
import { STORAGE_AUTH } from "src/constants/storage";
import { usePOST } from "src/utils/api";
import { setStorage } from "src/utils/storage";

export const useLoginService = () =>
  usePOST({
    // url: API_AUTH_LOGIN,
    url: API_LOGIN_SOFTMANTTO,
    onSuccess: (response) => {
      setStorage(STORAGE_AUTH, response[0].token);
    },
  });

export const useRegisterService = () =>
  usePOST({
    url: API_AUTH_REGISTER,
    onSuccess: (response) => {
      setStorage(STORAGE_AUTH, response.access_token);
    },
  });
