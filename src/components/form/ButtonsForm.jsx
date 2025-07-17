import PropTypes from "prop-types";
import Button from "src/components/common/Button";

const ButtonsForm = ({ withCancel = true, submitText = "Guardar" }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-3">
      {withCancel && <Button isCancel>Cancelar</Button>}
      <Button isSubmit>{submitText}</Button>
    </div>
  );
};

ButtonsForm.propTypes = {
  withCancel: PropTypes.bool,
  submitText: PropTypes.string,
};

export default ButtonsForm;
