import { escapeRegExp } from "lodash";
import { isNull } from "src/utils/values";

export const findItem = (item, value) =>
  Object.keys(item).some((field) => {
    if (!isNull(item[field])) {
      if (Array.isArray(item[field])) {
        const findArray = item[field].filter((rowArray) =>
          findItem(rowArray, value)
        );
        return findArray.length > 0;
      }

      if (typeof item[field] === "object") {
        return findItem(item[field], value);
      }

      if (typeof item[field] === "string" || typeof item[field] === "number") {
        const searchRegex = new RegExp(escapeRegExp(value), "i");
        return searchRegex.test(item[field].toString());
      }
    }

    return false;
  });

export const filterByValue = (list, value) =>
  list.filter((row) => findItem(row, value));
