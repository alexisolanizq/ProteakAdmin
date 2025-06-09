import { STORAGE_AUTH } from "src/constants/storage";
import { getStorage } from "src/utils/storage";

export const getAccessToken = () => {
  const storage = getStorage(STORAGE_AUTH);
  return storage ?? null;
};

export const isValidAuth = () => {
  const accessToken = getAccessToken();
  const isValid = (value) =>
    value !== undefined && value !== null && value !== 0;
  return isValid(accessToken);
};
