import style from'./SearchBox.module.css';
import SearchImg from "./Searchicon.svg"

const SearchBox = () => {
  return (
    <div className={style.searchbox}>
      <input placeholder="Search a album of your choice" className={style.textbox} />
      <div className={style.searchiconbox}>
        <img src={SearchImg} alt="search" />
      </div>
    </div>
  );
};

export default SearchBox;
