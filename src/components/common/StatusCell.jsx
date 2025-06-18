// import PropTypes from "prop-types";
import { getStatusStyle } from "src/utils/getStatusStyle";

const StatusCell = (status) => {
  const { label, className } = getStatusStyle(status);

  return <span className={`text-sm font-semibold ${className}`}>{label}</span>;
};

export default StatusCell;
