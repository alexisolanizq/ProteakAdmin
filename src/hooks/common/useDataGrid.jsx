import { useEffect, useState } from "react";
import { filterByValue } from "src/utils/array";

const useDataGrid = ({ data = [] }) => {
  const [rowsFilter, setRowsFilter] = useState(data);

  useEffect(() => {
    if (data && data.length > 0) {
      setRowsFilter(data);
    }
  }, [data]);

  const generateRandom = () => {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; i += 1) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };

  const onSearch = (value) => {
    if (value !== "") {
      const filteredRows = filterByValue(data, value);
      setRowsFilter(filteredRows);
    } else {
      setRowsFilter(data);
    }
  };

  return {
    onSearch,
    rowsFilter,
    generateRandom,
  };
};

export default useDataGrid;
