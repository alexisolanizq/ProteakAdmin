import PropTypes from "prop-types";
import Flex from "./Flex";

const FlexButtons = ({
  children,
  justify = "start",
  ...props
}) => (
  <Flex
    justify={justify}
    gap={24}
    {...props}
  >
    {children}
  </Flex>
);

FlexButtons.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.string,
  noMarginTop: PropTypes.bool,
};

export default FlexButtons;
