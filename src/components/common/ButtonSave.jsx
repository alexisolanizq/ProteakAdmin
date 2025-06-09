import PropTypes from "prop-types";
import Button from "src/components/common/Button";

const ButtonSave = ({
  buttonText = "Guardar",
  isLoading = false,
  isSubmit = true,
  ...props
}) => (
  <Button isLoading={isLoading} isSubmit={isSubmit} {...props}>
    {buttonText}
  </Button>
);

ButtonSave.propTypes = {
  isSubmit: PropTypes.bool,
  isLoading: PropTypes.bool,
  buttonText: PropTypes.string,
};

export default ButtonSave;
