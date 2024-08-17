import css from './ImageCard.module.css';
import { imageTypes } from "../../types";
import { FC } from 'react';

type ImageCardProps = {
  image: imageTypes;
  openModal: (url: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image: { alt_description, urls }, openModal }) => {
  function handleClick() {
    openModal(urls.full);
  }
    return (
      <img
      src={urls.small}
      alt={alt_description}
      className={css.galleryImage}
      onClick={ handleClick }
    />
  );
}
export default ImageCard;