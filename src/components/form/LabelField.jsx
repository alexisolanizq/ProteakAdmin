import PropTypes from "prop-types";

const LabelField = ({ name, children, ...props }) => {
  return (
    <label
      htmlFor={name}
      className="text-slate-700 text-sm font-semibold pb-2"
      {...props}
    >
      {children}
    </label>
  );
};

LabelField.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default LabelField;
