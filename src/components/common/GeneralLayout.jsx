import PropTypes from "prop-types";
import Loader from "./Loader";

const GeneralLayout = ({ children, title, resumen, isLoading = false }) => {
  if (isLoading)
    return (
      <div className="w-full h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <div className="px-6 py-4 w-full bg-white h-dvh overflow-auto">
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
};

export default GeneralLayout;
