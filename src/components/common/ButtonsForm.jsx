import PropTypes from "prop-types";
import FlexButtons from "src/components/common/FlexButtons";
import ButtonSave from "src/components/common/ButtonSave";
import ButtonCancel from "src/components/common/ButtonCancel";
const ButtonsForm = ({ onCancel, isLoading, ...props }) => (
  <FlexButtons className="w-full justify-around mt-6">
    <ButtonCancel onClick={onCancel} />
    <ButtonSave isLoading={isLoading} {...props} />
  </FlexButtons>
);

ButtonsForm.propTypes = {
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ButtonsForm;
