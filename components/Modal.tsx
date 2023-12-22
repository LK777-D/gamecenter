import { flatMap } from "lodash";
import { Dispatch, SetStateAction } from "react";
type ModalProps = {
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
};
const Modal = ({ setNavIsOpen }: ModalProps) => {
  return (
    <div
      onClick={() => setNavIsOpen(false)}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-600/50 z-[45]"
    ></div>
  );
};

export default Modal;
