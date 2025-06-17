import PropTypes from "prop-types";
import LabelField from "src/components/form/LabelField";

const TextField = ({
  id,
  name,
  label,
  error,
  value = null,
  type = "text",
  className = "",
  helperText = "",
  isDisabled = false,
  inputClassName = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <LabelField name={name}>{label}</LabelField>
      <input
        value={value ?? ""}
        id={id}
        type={type}
        className={`bg-gray-100 ring-gray-200 ring-2 outline-none rounded-md placeholder:text-slate-400 text-slate-700 text-sm font-semibold pl-3 pr-8 py-3 appearance-none w-full ${inputClassName} ${isDisabled ? 'bg-gray-300' : ''}`}
        disabled={isDisabled}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{helperText}</p>}
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.any,
  error: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  helperText: PropTypes.string,
  inputClassName: PropTypes.string,
  id: PropTypes.string || PropTypes.number,
};

export default TextField;
