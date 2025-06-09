import PropTypes from "prop-types";
import Button from "src/components/common/Button";

const ButtonCancel = ({ onClick = () => {}, ...props }) => (
  <Button isCancel onClick={onClick} {...props}>
    Cancelar
  </Button>
);

ButtonCancel.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonCancel;
