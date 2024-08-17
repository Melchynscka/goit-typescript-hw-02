import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { imageTypes } from '../../types';
import css from './ImageGallery.module.css';

type ImageGalleryProps = {
  images: imageTypes[];
  openModal: (url: string) => void;
}

const ImageGallery:FC<ImageGalleryProps> = ({ images, openModal }) =>{
    return (
    <ul className={css.galleryList}>
      {images.map((image , index) => (
        <li className={css.listItem} key={`${image.id}-${index}`}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;