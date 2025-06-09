import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import DatePicker from "src/components/form/DatePicker";

const DatePickerController = ({
  name,
  label,
  rules,
  control,
  onChange,
  className = "mb-4",
  defaultValues,
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
        <DatePicker
          name={name}
          label={label}
          className={className}
          onChange={(event) => {
            onChange(event.target.value);
            onChangeField(event.target.value);
          }}
          onBlur={onBlur}
          value={value}
          error={!!error}
        />
      )}
    />
  );
};

DatePickerController.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
  rules: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  defaultValues: PropTypes.object,
};

export default DatePickerController;
