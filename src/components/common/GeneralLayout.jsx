import PropTypes from "prop-types";
import Loader from "./Loader";

const GeneralLayout = ({
  children,
  title,
  resumen,
  isLoading = false,
  isFullWidth = true,
}) => {
  if (isLoading)
    return (
      <div className="w-full h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <div
      className={`px-6 py-4 mx-auto h-dvh overflow-auto ${
        isFullWidth ? "w-11/12" : "w-10/12"
      }`}
    >
      <div className="mb-6">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p>{resumen}</p>
      </div>
      {children}
    </div>
  );
};

GeneralLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  resumen: PropTypes.string,
  isLoading: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

export default GeneralLayout;
