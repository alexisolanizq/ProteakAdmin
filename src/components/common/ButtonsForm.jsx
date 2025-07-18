import PropTypes from "prop-types";
import FlexButtons from "src/components/common/FlexButtons";
import ButtonSave from "src/components/common/ButtonSave";
import ButtonCancel from "src/components/common/ButtonCancel";
const ButtonsForm = ({ onCancel, isLoading, ...props }) => (
  <FlexButtons className="w-full justify-around my-4 px-5">
    <ButtonCancel onClick={onCancel} {...props} />
    <ButtonSave isLoading={isLoading} {...props} />
  </FlexButtons>
);

ButtonsForm.propTypes = {
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ButtonsForm;
