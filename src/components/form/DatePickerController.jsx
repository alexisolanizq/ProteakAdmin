import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import DatePicker from "src/components/form/DatePicker";

const DatePickerController = ({
  name,
  label,
  control,
  rules = {},
  defaultValues,
  className = "mb-2",
  onChange = () => {},
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValues}
      render={({
        field: { onChange: onChangeField, value, onBlur },
        fieldState: { error },
      }) => (
        <div className="flex flex-col flex-1">
          <DatePicker
            name={name}
            label={label}
            className={className}
            onChange={(event) => {
              onChange(event);
              onChangeField(event);
            }}
            onBlur={onBlur}
            value={value}
            error={!!error}
          />
          {error && <p className="text-red-500 font-semibold">{error.message}</p>}
          <p></p>
        </div>
      )}
    />
  );
};

DatePickerController.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
  rules: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  defaultValues: PropTypes.object,
};

export default DatePickerController;
