import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import TextField from "src/components/form/TextField";

const TextFieldController = ({
  name = "",
  label = "",
  control,
  rules,
  defaultValues,
  className = "mb-4",
  onEnterChange = () => {},
  onChange = () => {},
  isLoading = false,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValues}
      render={({
        field: { onChange: onChangeField, value, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextField
            id={name}
            className={className}
            label={label}
            name={name}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                onEnterChange(event.target.value);
              }
            }}
            onBlur={onBlur}
            onChange={(event) => {
              onChangeField(event.target.value);
              onChange(event.target.value);
            }}
            value={value ?? ""}
            error={!!error}
            helperText={error}
            {...props}
          />
          {isLoading && <p>Cargando</p>}
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
  className: PropTypes.string,
  onEnterChange: PropTypes.func,
  defaultValues: PropTypes.object,
  inputClassName: PropTypes.string,
};

export default TextFieldController;
