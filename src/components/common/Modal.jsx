import PropTypes from "prop-types";
import Button from "src/components/common/Button";
import ButtonsForm from "src/components/common/ButtonsForm";

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
      onClick={onClose}
    >
      <dialog
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`fixed bg-white shadow-lg rounded-lg max-h-[576px] z-10 ${
          isFullWidth ? "w-10/12" : "w-[80%]"
        } mx-auto top-[54%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden flex flex-col`}
      >
        <div className="flex items-center justify-between px-10 py-3 border-b-2">
          <div className="text-xl font-semibold">{title}</div>
          <Button isPlainText onClick={onClose}>
            <i className="ri-close-line text-xl" />
          </Button>
        </div>

        <div className={`p-4 overflow-auto flex-1 ${classNameBody}`}>
          {children}
        </div>

        <div className="justify-end w-full bg-white border-t-2">
          <ButtonsForm withBigPadding onCancel={onClose} />
        </div>
      </dialog>
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
