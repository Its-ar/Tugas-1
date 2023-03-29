import Navigator from "../../component/Navbar";
import HeroBanner from "../../component/HeroBanner";
import style from "./styles.module.css";

const Header = () => {
  return (
    <div className={style["container-header"]}>
      <Navigator />
      <HeroBanner />
    </div>
  );
};

export default Header;
