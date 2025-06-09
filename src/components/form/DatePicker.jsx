import PropTypes from "prop-types";
import dayjs from "dayjs";
import LabelField from "./LabelField";

const DatePicker = ({ label, name, value, className, onChange }) => {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      {label && <LabelField name={name}>{label}</LabelField>}
      <input
        type="date"
        className="bg-gray-100 outline-none rounded-md placeholder:text-slate-400 text-slate-700 text-sm font-semibold pl-3 pr-8 py-3  cursor-pointer w-full hover:ring-gray-200 hover:ring-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={dayjs().format("YYYY-MM-DD")}
      />
    </div>
  );
};

DatePicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default DatePicker;
