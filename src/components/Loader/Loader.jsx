import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
    return (
     <div className={css.loadWrapper}>
      <Triangle />
      <p>Laoding...</p>
    </div>
  );
}