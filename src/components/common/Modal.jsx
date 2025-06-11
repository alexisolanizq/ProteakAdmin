import PropTypes from "prop-types";

const Modal = ({
  isShow = false,
  onClose,
  title = "",
  classNameBody = "",
  isFullWidth = false,
  children,
}) => {
  return (
    <div
      className={`fixed w-full h-dvh top-0 left-0 bg-black/40 ${
        isShow ? "block" : "hidden"
      }`}
    >
      <div
        className={`fixed bg-white shadow-lg rounded-lg z-10 ${
          isFullWidth ? "w-10/12" : "w-[80%]"
        } mx-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden`}
      >
        <div className="flex items-center justify-between px-10 py-3 border-b-2">
          <div className="text-xl font-semibold">{title} <i className={`ri-close-large-line text-lg`} /></div>
        </div>
        <div
          className={`${classNameBody} h-[550px] px-10 py-4 overflow-y-scroll`}
        >
          {children}
        </div>
        <div className="flex">
          <button
            onClick={onClose}
            className="flex-1 py-3 font-semibold bg-gray-400 text-white"
          >
            Cerrar
          </button>
          <button
            onClick={() => {}}
            className="flex-1 py-3 font-semibold bg-primary-100 text-white"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  isFullWidth: PropTypes.bool,
  classNameBody: PropTypes.string,
};

export default Modal;
