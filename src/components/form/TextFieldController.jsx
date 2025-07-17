import { Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import TextField from "src/components/form/TextField";

const TextFieldController = ({
  rules,
  control,
  name = "",
  label = "",
  defaultValue,
  isLoading = false,
  className = "mb-4",
  isDisabled = false,
  onChange = () => {},
  onEnterChange = () => {},
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange: onChangeField, value, onBlur },
        fieldState: { error },
      }) => (
        <>
          <div className="flex flex-col flex-1">
            <TextField
              id={name}
              name={name}
              label={label}
              error={!!error}
              onBlur={onBlur}
              helperText={error}
              value={value ?? ""}
              className={className}
              isDisabled={isDisabled}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onEnterChange(event.target.value);
                }
              }}
              onChange={(event) => {
                onChangeField(event.target.value);
                onChange(event.target.value);
              }}
              {...props}
            />

            {error && (
              <p className="text-red-500 font-semibold">{error.message}</p>
            )}
          </div>
          {isLoading && <Skeleton variant="rounded" width={210} height={30} />}
        </>
      )}
    />
  );
};

TextFieldController.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
  rules: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onEnterChange: PropTypes.func,
  defaultValue: PropTypes.object,
  inputClassName: PropTypes.string,
};

export default TextFieldController;
