import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import Select from "src/components/form/Select";

const SelectController = ({
  name,
  label,
  control,
  rules = {},
  options = [],
  valueKey = "id",
  className = "mb-4",
  optionKey = "name",
  onChange = () => {}
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange: onChangeField, value, onBlur },
      fieldState: { error },
    }) => (
      <Select
        value={value}
        label={label}
        onBlur={onBlur}
        error={error}
        options={options}
        valueKey={valueKey}
        optionKey={optionKey}
        className={className}
        onChange={(e) => {
          onChangeField(e.target.value);
          onChange(e.target.value);
        }}
      />
    )}
  />
);

SelectController.propTypes = {
  name: PropTypes.string,
  rules: PropTypes.array,
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  control: PropTypes.object,
  className: PropTypes.string,
  valueKey: PropTypes.string || PropTypes.number,
  optionKey: PropTypes.string || PropTypes.number,
};

export default SelectController;
