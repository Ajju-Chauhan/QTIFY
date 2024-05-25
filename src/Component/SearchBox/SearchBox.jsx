import style from'./SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={style.searchbox}>
      <input placeholder="Search a album of your choice" className={style.textbox} />
      <div className={style.searchiconbox}>
        <img src="./Searchicon.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBox;
