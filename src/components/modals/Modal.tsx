import React, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  className?: string;
  classBtn?: string;
  iconBtn?: React.ReactNode;
  textBtn: string
}

type ModalChildComponentsProps = {
  children: React.ReactNode;
  className?: string;
}

function Modal({children, modal, setModal, title, className, classBtn, iconBtn, textBtn}: ModalProps) {
  const [modalRoot] = useState(document.createElement('div'));
  const modalContainer = document.getElementById('modal-root');

  useEffect(() => {
    if (modalContainer) {      
      modalContainer.appendChild(modalRoot);
      return () => {
        modalContainer.removeChild(modalRoot);
      };
    }
  }, [modalContainer, modalRoot]);

    const toggleModal = () => {
      setModal(!modal);
    }
    return <div>
      <button onClick={toggleModal} className={classBtn +' flex items-center space-x-2 cursor-pointer'}>{iconBtn} <span>{textBtn}</span></button>
      {ReactDOM.createPortal(
        modal && <div onClick={toggleModal} className={"modalBackground overflow-y-auto cursor-pointer overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-full flex bg-base-content/70"}>
            <div onClick={(event) => event.stopPropagation()} className={className + " px-5 py-4 cursor-default m-4 max-w-2xl h-auto bg-base-300 flex-1 rounded-md shadow-sm shadow-base-200"}>
              <div className='flex items-center justify-between'>
                <div className='md:text-2xl'>{title}</div>
                  <i onClick={toggleModal}  className="bi bi-x text-4xl text-red-400 cursor-pointer"></i>
                </div>
                {children}
            </div>
        </div>
        , modalRoot
      )}
    </div>
}

Modal.Body = ({children, className}: ModalChildComponentsProps) => {  
  return <div className={className + ' pt-1 border-t mt-2'}>{children}</div>
}

Modal.Footer = ({children, className}: ModalChildComponentsProps) => {
  return <div className={className + ' flex items-center justify-end space-x-2 pt-2 border-t mt-4'}>{children}</div>
}


export default Modal