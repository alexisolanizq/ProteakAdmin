import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import TextArea from "./TextArea";

const TextAreaController = ({
  name,
  label,
  control,
  rules,
  defaultValues,
  className,
  onEnterChange = () => {},
  onChange = () => {},
  isLoading,
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
          <TextArea
            name={name}
            label={label}
            onBlur={onBlur}
            error={!!error}
            value={value ?? ""}
            className={className}
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
          />
          {isLoading && <p>Cargando</p>}
        </>
      )}
    />
  );
};

TextAreaController.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string,
  rules: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  onEnterChange: PropTypes.func,
  defaultValues: PropTypes.object,
};

export default TextAreaController;
