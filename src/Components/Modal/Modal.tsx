import React, { ReactElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

interface ModalProps {
  trigger: ReactElement;
  maxWidth?: string;
  maxHeight?: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  trigger,
  maxWidth = '100%',
  maxHeight = '100%',
  children,
}) => {
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('active-modal', modal);
    return () => {
      document.documentElement.classList.remove('active-modal');
    };
  }, [modal]);

  return (
    <>
      {React.cloneElement(trigger, { onClick: toogleModal })}
      {modal && (
        <div className="modal">
          <div onClick={toogleModal} className="overlay"></div>
          <div className="modal-content" style={{ maxWidth, maxHeight }}>
            {children}
            <button className="close-modal" onClick={toogleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  trigger: PropTypes.element.isRequired,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;
