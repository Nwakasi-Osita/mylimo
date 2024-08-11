import styles from "./Nav.module.css";
import Link from "next/link";
import { Container } from "../Container/Container";

export default function NavPage() {
  return (
    <>
      <Container className={styles.navigationSection}>
        <div className={styles.logo}>
          <h2>
            <span className={styles.logoFirstTwoLaters}>MY</span>limo
          </h2>
        </div>

        <div className={styles.navigationMenu}>
          <ul>
            <Link href="/HomePage">Home</Link>
            <Link href="/">Service</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Fleet</Link>
            <Link href="/">Contact</Link>
          </ul>
        </div>

        <div className={styles.convertingLanguages}>
          <select name="language" id="" className={styles.languages}>
            <option value="swedish"> SWEDISH</option>
            <option value="hindi"> INDIA</option>{" "}
            <option value="italian"> ITALY</option>
            <option value="Eng" selected="selected">
              ENG
            </option>
          </select>
        </div>
      </Container>
    </>
  );
}
