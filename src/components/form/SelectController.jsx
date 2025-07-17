import { Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import Select from "src/components/form/Select";

const SelectController = ({
  name,
  label,
  control,
  isLoading,
  rules = {},
  options = [],
  valueKey = "id",
  className = "mb-4",
  optionKey = "name",
  onChange = () => {},
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange: onChangeField, value, onBlur },
      fieldState: { error },
    }) => (
      <>
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <Skeleton variant="rounded" width={210} height={24} />
            <Skeleton variant="rounded" width={210} height={44} />
          </div>
        ) : (
          <div className="flex flex-col flex-1">
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
            {error && (
              <p className="text-red-500 font-semibold">{error.message}</p>
            )}
          </div>
        )}
      </>
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
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  valueKey: PropTypes.string || PropTypes.number,
  optionKey: PropTypes.string || PropTypes.number,
};

export default SelectController;
