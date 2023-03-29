import styles from "./styles.module.css";
import convertToRupiah from "../../helpers/convertToRupiah";
import { Container } from "react-bootstrap";
const Card = ({ title, subtitle, description, price, discountedPrice, logoSrc }) => {
  return (
    <Container>
      <row>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={logoSrc} alt="Logo" />
            </div>
            <div className={styles.headerText}>
              <div className={styles.subtitle}>{subtitle}</div>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.text}>
              <div className={styles.titleBody}>{title}</div>
              <div className={styles.subtitleBody}>{subtitle}</div>
              <div className={styles.descriptionBody}>{description}</div>
              <div className={styles.price}>
                <div className={styles.normalPrice}>{convertToRupiah(price)}</div>
                <div className={styles.discountedPrice}>{convertToRupiah(discountedPrice)}</div>
              </div>
            </div>
          </div>
        </div>
      </row>
    </Container>
  );
};

export default Card;
