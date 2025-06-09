import PropTypes from "prop-types";
import Loader from "src/components/common/Loader";

const Form = ({ children, onSubmit, isLoading, ...props }) => {
  if (isLoading) return <Loader />;
  return (
    <form onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Form;
