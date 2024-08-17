import { imageTypes } from '../../types';
import { useEffect, useState } from "react";

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';

import { fetchImage } from '../../apiService/gallery-api';

export default function App() {
  const [images, setImages] = useState<imageTypes[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [bigImage, setBIgImage] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages(){
      try {
        setLoader(true);
        const image = await fetchImage(topic, page);
        setImages((prevImage) => {
        return [...prevImage, ...image.results];
        });
        setTotalPage(image.total_pages);
      } catch (e: unknown) {
        console.log(e);
        setLoader(false);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [topic, page , totalPage])
  
  function handleSurch(newTopic: string): void {
    setTopic(newTopic);
    setImages([]);
    setPage(1);
  }
  function handleClickImg(url: string): void {
    setBIgImage(url);
    setIsOpen(true);
  }
  function handleClick(): void {
    setPage(page + 1);
  }
  
  
  return (
    <div>
      <SearchBar onSearch={handleSurch} />
      <ImageGallery images={images} openModal={handleClickImg} />
      {images.length > 0 && totalPage > 1 &&  !loader && <LoadMoreBtn handleLoadMore={handleClick} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal
        closeModal={closeModal}
        isOpen={modalIsOpen}
        imgUrl={bigImage}
      />
    </div>
  );
}
