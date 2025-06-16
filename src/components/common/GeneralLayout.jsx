import PropTypes from "prop-types";
import Loader from "./Loader";
import { cloneElement } from "react";

const GeneralLayout = ({
  children,
  title,
  resumen,
  isLoading = false,
  isFullWidth = true,
  actions = [],
}) => {
  if (isLoading)
    return (
      <div className="w-full h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <div
      className={`px-6 py-4 h-dvh overflow-auto w-full`}
      // className={`px-6 py-4 mx-auto h-dvh overflow-auto ${
      //   isFullWidth ? "w-full md:w-11/12" : "w-full md:w-10/12"
      // }`}
    >
      <div
        className={`mx-auto ${isFullWidth ? "w-full md:w-11/12" : "w-full md:w-10/12"}`}
        // className="w-11/12 mx-auto"
      >
        <div className="flex flex-col lg:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="self-start">
            <h2 className="font-semibold text-xl">{title}</h2>
            <p>{resumen}</p>
          </div>
          <div className="flex gap-4">
            {actions &&
              actions.map((children, index) =>
                cloneElement(children, { key: `action-element-${index}` })
              )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

GeneralLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  actions: PropTypes.array,
  resumen: PropTypes.string,
  isLoading: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

export default GeneralLayout;
