import PropTypes from "prop-types";
const Flex = ({
  children,
  gap = 0,
  className = "",
  isVertical = false,
  isWrap = false,
  align = "center",
  justify = "start",
  ...props
}) => {
  const style = {
    gap,
  };

  const classWrap = isWrap ? "flex-wrap" : "";
  const classOrientation = isVertical ? "flex-col" : "flex-col md:flex-row";

  return (
    <div
      style={style}
      className={`flex ${className} align-${align} justify-${justify} ${classOrientation} ${classWrap}`}
      {...props}
    >
      {children}
    </div>
  );
};

Flex.propTypes = {
  gap: PropTypes.number,
  isWrap: PropTypes.bool,
  align: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.string,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
};

export default Flex;
