import PropTypes from "prop-types";

const Select = ({
  name,
  label,
  error = "",
  options,
  valueKey = "id",
  optionKey = "name",
  placeholder = "Selecciona una opción",
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <label
        htmlFor={name}
        className="text-slate-700 text-sm font-semibold pb-2"
      >
        {label}
      </label>
      <div className="relative">
        <select
          {...props}
          id={name}
          className="bg-gray-100 outline-none rounded-md placeholder:text-slate-400 text-slate-700 text-sm font-semibold pl-3 pr-8 py-3 appearance-none cursor-pointer w-full hover:ring-gray-200 hover:ring-2"
        >
          <option value={null} defaultValue="selected">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={option[valueKey] || index} value={option[valueKey]}>
              {" "}
              {option[optionKey]}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-5 w-5 ml-1 absolute top-3 right-2 text-slate-700 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func,
  control: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  valueKey: PropTypes.string || PropTypes.number,
  optionKey: PropTypes.string || PropTypes.number,
};

export default Select;
