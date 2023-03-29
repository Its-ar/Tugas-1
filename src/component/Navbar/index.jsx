import styles from "./styles.module.css";
import Button from "../Button";
import Logo from "../../assets/img/logo.png";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

function Navigator() {
  return (
    <nav className={styles.navbar}>
      {/* Left side of navbar */}
      <div className={styles["navbar-left"]}>
        {/* Logo */}
        <div className={styles.logo}>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Edspert.ID" />
          </Navbar.Brand>
        </div>
      </div>
      {/* Right side of navbar */}
      <div className={styles["navbar-right"]}>
        {/* Dropdown 1 */}
        <NavDropdown title="Program" id="navbarScrollingDropdown" className="p-4">
          <NavDropdown.Item href="https://edspert.id/pages/all-class-filter/program/4d673d3d#product-catalog">Webinar</NavDropdown.Item>
          <NavDropdown.Item href="https://edspert.id/pages/all-class-filter/program/4e413d3d#product-catalog">Bootcamp</NavDropdown.Item>
          <NavDropdown.Item href="https://edspert.id/pages/all-class-filter/program/4e513d3d#product-catalog">Online Course</NavDropdown.Item>
        </NavDropdown>
        {/* Dropdown 2 */}
        <NavDropdown title="Bidang Ilmu" id="navbarScrollingDropdown" className="p-4">
          <NavDropdown.Item href="https://edspert.id/pages/all-class-pages/program/4d673d3d#product-catalog">Tech Development</NavDropdown.Item>
          <NavDropdown.Item href="https://edspert.id/pages/all-class-filter/program/4e413d3d#product-catalog">Data</NavDropdown.Item>
        </NavDropdown>
        {/* Normal link */}
        <Nav.Link href="https://edspert.id/pages/tentang-kami" className="p-4">
          Tentang Edspert
        </Nav.Link>
        {/* Button */}
        <Button round={true}>Masuk/Daftar</Button>
      </div>
    </nav>
  );
}

export default Navigator;
