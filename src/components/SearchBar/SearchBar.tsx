
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FC ,FormEvent} from 'react';

type SearchBarProps = {
  onSearch: (newTopic: string) => void; 
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const notify = () => toast.error("the field must be filled");

  function handleSubmit(evn: FormEvent<HTMLFormElement>) {
    evn.preventDefault();
    const formEl = evn.currentTarget as HTMLFormElement;
    const topic = (formEl.elements.namedItem("topic") as HTMLInputElement).value.trim();

    if (topic === "") {
      notify();
      return;
    }

    onSearch(topic);
    formEl.reset();
  }
    return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="topic"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}
export default SearchBar;