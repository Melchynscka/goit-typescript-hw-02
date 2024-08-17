import css from './LoadMoreBtn.module.css';
import { FC } from 'react';

type LoadMoreBtnProps = {
  handleLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore })=> {
    return (
      <button onClick={handleLoadMore} className={css.loadMoreBtn}>
      Load more...
    </button>
  );
}
export default LoadMoreBtn