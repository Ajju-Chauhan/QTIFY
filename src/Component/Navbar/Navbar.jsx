import SearchBox from '../SearchBox/SearchBox';
import Logo from "../Logo/Logo"
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <SearchBox />
      <button className={style.navbtn}>Give Feedback</button>
    </nav>
  );
};

export default Navbar;
