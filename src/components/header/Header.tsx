import { AppHeader } from "./Header.style";
import Logo from "../../assets/svgs/logo.svg";

const Header = () => (
  <AppHeader>
    <img src={Logo} alt="logo-ekwateur" />
  </AppHeader>
);

export default Header;
