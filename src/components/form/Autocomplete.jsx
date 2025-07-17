import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Autocomplete = ({ options, label = "" }) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

Autocomplete.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default Autocomplete;
