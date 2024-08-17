import Modal from 'react-modal';
import { FC } from 'react';
import { imageTypes } from '../../types';
import css from './ImageModal.module.css';

type ImageModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  imgUrl: string;
}

const ImageModal:FC<ImageModalProps> = ({ isOpen, imgUrl, closeModal }) =>{
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(89, 89, 92, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <div>
                    <div>
                        <img
                            src={imgUrl}
                            alt=""
                            className={css.modalImg}
                        />
                    </div>
                </div>
            </Modal>
        </>);
}
export default ImageModal