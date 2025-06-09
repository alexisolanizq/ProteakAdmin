import PropTypes from "prop-types";
import LabelField from "./LabelField";

const TextArea = ({
  name,
  value,
  label,
  rows = 4,
  cols = 50,
  className,
  placeholder,
  onChange = () => {},
}) => (
  <div className={`flex flex-col flex-1 ${className}`}>
    <LabelField name={name}>{label}</LabelField>
    <textarea
      id={name}
      cols={cols}
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-gray-100 outline-none rounded-md placeholder:text-slate-400 text-slate-700 text-sm font-semibold pl-3 pr-8 py-3 appearance-none w-full hover:ring-gray-200 hover:ring-2 ${className}`}
    />
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
