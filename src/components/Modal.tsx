
import { ReactElement, ReactNode } from 'react';
import './Modal.css';

interface IProps {
  children: ReactNode
  isOpen: boolean,
  onRequestClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, isOpen, onRequestClose }) => {
  return isOpen ? (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onRequestClose}>&times;</span>
        {children}
      </div>
    </div>

  ) : null;
}

export default Modal;