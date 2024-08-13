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
                  <Link href="/">Chauffeur Service</Link>
                </li>{" "}
                <li>
                  <Link href="/"> Business Meeting</Link>
                </li>{" "}
                <li>
                  <Link href="/">Corporate Trips</Link>
                </li>{" "}
                <li>
                  <Link href="/">Event Service</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* /////////CONTACT///////// */}

          <div className={styles.contactSection}>
            <div className={styles.contactSectionHeader}>
              <h2> Contact Us</h2>
            </div>

            <div className={styles.contactSectionDetails}>
              {/* /////// */}

              <div className={styles.contactSectionDetail}>
                <p>
                  <span className={styles.contactSectionImg}>
                    <img src="images/location-icon.png" alt="" />
                  </span>
                  21 Rock Creek Dr. Shelton
                </p>
              </div>

              {/* /////// */}

              <div className={styles.contactSectionDetail}>
                <p>
                  <span className={styles.contactSectionImg}>
                    <img src="images/call.png" alt="" />
                  </span>
                  123-4567-891
                </p>
              </div>

              {/* /////// */}

              <div className={styles.contactSectionDetail}>
                <p>
                  <span className={styles.contactSectionImg}>
                    <img src="images/email.png" alt="" />
                  </span>
                  wwww.mylimo123.gmail.com
                </p>
              </div>

              {/* /////// */}

              <div className={styles.contactSectionDetail}>
                <p>
                  <span className={styles.contactSectionImg}>
                    <img src="images/clock.png" alt="" />
                  </span>
                  Mon-Sat: 05:00-24:00
                </p>
              </div>
            </div>
          </div>

          {/* /////////LOCATION///////// */}

          <div className={styles.locationSection}>
            <div className={styles.locationSectionHeader}>
              <h2> Location</h2>
            </div>

            <div className={styles.locationSectionDetails}>
              {/* /////// */}
              <div className={styles.locationSectionDetail}>
                <p>
                  <span className={styles.locationImg}>
                    <img src="images/location-icon.png" alt="" />
                  </span>
                  Enugu
                </p>
              </div>
              {/* /////// */}
              <div className={styles.locationSectionDetail}>
                <p>
                  <span className={styles.locationImg}>
                    <img src="images/location-icon.png" alt="" />
                  </span>
                  Abuja
                </p>
              </div>
              {/* /////// */}
              <div className={styles.locationSectionDetail}>
                <p>
                  <span className={styles.locationImg}>
                    <img src="images/location-icon.png" alt="" />
                  </span>
                  Lagos
                </p>
              </div>
              {/* /////// */}
              <div className={styles.locationSectionDetail}>
                <p>
                  <span className={styles.locationImg}>
                    <img src="images/location-icon.png" alt="" />
                  </span>
                  Lagos
                </p>
              </div>{" "}
            </div>
          </div>
        </Container>
        <Container className={styles.copyRight}>
          &copy; MyLimo Limousine Service - All Rights Reserved|Legal Notice |
          Pricacy Policy{" "}
        </Container>
      </div>
    </>
  );
}
