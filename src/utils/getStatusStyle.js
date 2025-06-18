import { STATUS_CLASS } from "src/constants/options";

export const getStatusStyle = (status) => {
  const toLower = status.toLowerCase();

  return (
    STATUS_CLASS[toLower] || {
      label: status,
      className: "bg-gray-100 text-gray-800 px-2 py-1 rounded",
    }
  );
};
