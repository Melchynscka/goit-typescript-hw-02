import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';
import { FC } from 'react';

const Loader:FC = ()=> {
    return (
      <div className={css.loadWrapper}>
      <Triangle />
      <p>Laoding...</p>
    </div>
  );
}
export default Loader;