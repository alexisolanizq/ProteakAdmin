// import PropTypes from "prop-types";
import { getStatusStyle } from "src/utils/getStatusStyle";

const StatusCell = (status) => {
  const { label, className } = getStatusStyle(status);

  return (
    <span
      className={`text-sm font-semibold px-2 py-1 rounded-full ${className}`}
    >
      {label}
    </span>
  );
};

export default StatusCell;
