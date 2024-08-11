import styles from "./Footer.module.css";
import Link from "next/link";
import { Container } from "../Container/Container";

export default function FooterPage() {
  return (
    <>
      <div className={styles.footerSection}>
        <Container className={styles.footerSectionDetails}>
          <div className={styles.aboutSection}>
            <div className={styles.aboutSectionHeader}>
              <h2> About Us</h2>
            </div>

            <div className={styles.aboutSectionDetail}>
              <p>
                MyLimo limousine service is a reigional chauffeur service based
                near Frankfurt and has been offering professional passenger
                transport for demanding customers for several years
              </p>
            </div>
          </div>

          {/* /////////SERVICE///////// */}

          <div className={styles.serviceSection}>
            <div className={styles.serviceSectionHeader}>
              <h2> Our Service</h2>
            </div>

            <div className={styles.serviceSectionDetail}>
              <ul>
                <li>
                  <Link href="/">Airport Transfer</Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>{" "}
                <li>
                  <Link href="/">Airport Transfer</Link>
                </li>{" "}
                <li>
                  <Link href="/">Airport Transfer</Link>
                </li>{" "}
                <li>
                  <Link href="/">Airport Transfer</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* /////////CONTACT///////// */}

          <div className={styles.contactSection}>
            <div className={styles.contactSectionHeader}>
              <h2> Contact Us</h2>
            </div>

            <div className={styles.contactSectionDetail}></div>
          </div>
        </Container>
      </div>
    </>
  );
}
