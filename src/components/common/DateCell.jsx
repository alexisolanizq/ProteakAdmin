import { format } from "date-fns";
import PropTypes from "prop-types";

const DateCell = ({ timestamp }) => {
  const fechaValida = new Date(timestamp * 1000);
  const esValida = !isNaN(fechaValida);
  return esValida ? format(fechaValida, "dd/MM/yyyy HH:mm") : "Fecha inválida";
};

DateCell.propTypes = {
  timestamp: PropTypes.any,
};

export default DateCell;
