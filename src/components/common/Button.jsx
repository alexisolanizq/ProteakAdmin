import { useCallback } from "react";
import PropTypes from "prop-types";

const Button = ({
  icon,
  children,
  iconClass,
  isEnd = false,
  type = "button",
  isSubmit = false,
  isPlainText = false,
  isCancel = false,
  isLoading = false,
  onClick = () => {},
  isBorderPrimary = false,
  withBigPadding = false,
}) => {
  const getClassName = useCallback(() => {
    if (isBorderPrimary)
      return "border-2 border-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg";
    if (isCancel)
      return "bg-gray-500 text-white hover:shadow-lg hover:ring-gray-100 hover:ring-2";
    if (isSubmit)
      return "bg-primary-600 text-white hover:ring-primary-100 hover:ring-2 hover:shadow-lg";
    if (isPlainText)
      return "bg-none border-none shadow-none hover:bg-gray-200"

    return "bg-primary-300 text-white hover:shadow-lg";
  }, [isBorderPrimary, isCancel, isSubmit, isPlainText]);

  const classNameType = getClassName();
  const classLoading = isLoading && "loading";
  const typeButton = isSubmit ? "submit" : type;
  const alignEnd = isEnd && "ml-auto";
  const padding = withBigPadding ? "px-6 py-3" : 'px-6 py-1.5'

  return (
    <button
      onClick={onClick}
      type={typeButton}
      className={`block rounded-md ${padding} font-semibold ${classNameType} ${alignEnd} ${classLoading}`}
    >
      {icon && <i className={`${icon} ${iconClass}`} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.any,
  isEnd: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  isSubmit: PropTypes.bool,
  isCancel: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPlainText: PropTypes.bool,
  iconClass: PropTypes.string,
  withBigPadding: PropTypes.bool,
  isBorderPrimary: PropTypes.bool,
};

export default Button;
