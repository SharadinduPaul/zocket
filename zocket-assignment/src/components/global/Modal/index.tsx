import React from "react";
import "./styles.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: any;
  style?: React.CSSProperties;
  className?: string;
}
export const Modal = ({
  open,
  onClose,
  children,
  style,
  className,
}: ModalProps) => {
  return (
    <div
      style={style}
      className={`modal-main ${open ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${open ? "open" : ""} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
