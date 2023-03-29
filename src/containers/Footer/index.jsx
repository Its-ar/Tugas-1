import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column1}>
            <h3>Edspert</h3>
            <p>Jl Rukun Ujung,Pejaten Timur,Pasar Minggu, KOTA JAKARTA SELATAN,DKI JAKARTA,ID 12520</p>
          </div>
          <div className={styles.column2}>
            <div className={styles.row}>
              <div className={styles.column}>
                <h3>Program</h3>
                <ul className={styles.column2List}>
                  <li>
                    <a href="https://edspert.id/#">Online Course</a>
                  </li>
                  <li>
                    <a href="https://edspert.id/#">Mini bootcamp</a>
                  </li>
                  <li>
                    <a href="https://edspert.id/#">bootcamp</a>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <h3>Bidang Ilmu</h3>
                <ul className={styles.column2List}>
                  <li>
                    <a href="https://edspert.id/#">Program 1</a>
                  </li>
                  <li>
                    <a href="https://edspert.id/#">Program 2</a>
                  </li>
                  <li>
                    <a href="https://edspert.id/#">Program 3</a>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <h3>Tentang Edspert</h3>
                <ul className={styles.column2List}>
                  <li>
                    <a href="https://edspert.id/#">Program 1</a>
                  </li>
                  <li>
                    <a href="https://edspert.id/##">Program 2</a>
                  </li>
                  <li>
                    <a href="https://edspert.id/#">Program 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column2}>
                <p>&copy; Arman Ghazali.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
