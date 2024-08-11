// import styles from "./HomePage"
import Nav from "../NavPage/NavPage";
import Button from "../Button/Button";
import styles from "./HomePage.module.css";
import Link from "next/link";
import { Container } from "../Container/Container";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <>
      <div className={styles.banner}>
        <Nav />
        <Container className={styles.HomePageSection}>
          <div className={styles.description}>
            <div className={styles.HomePageHeader}>
              <h2>High service for every customer</h2>
            </div>

            <div className={styles.purchaseButton}>
              <Button type="secondary">
                <Link href="/">Booking Now</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.UserScheduleSection}>
        <Container className={styles.menu}>
          <ul>
            <li>
              <a href="#">Hourly </a>

              <ul className={styles.dropDown}>
                <li>
                  <div className={styles.menuInfo}>
                    <div className={styles.menuHeader}>
                      <h4>Pick Up Address</h4>{" "}
                    </div>
                    <div className={styles.userInfo}>
                      <img src="images/location-icon.svg" alt="" />
                      <span>
                        <p>Enter Location</p>{" "}
                      </span>
                    </div>
                  </div>
                  <div className={styles.lineDemacation}></div>
                </li>

                <li>
                  <div className={styles.menuInfo}>
                    <div className={styles.menuHeader}>
                      <h4>Drop Off Address</h4>{" "}
                    </div>

                    <div className={styles.userInfo}>
                      <img src="images/location-icon.svg" alt="" />
                      <span>
                        <p>Enter Location</p>
                      </span>
                    </div>
                  </div>

                  <div className={styles.lineDemacation}></div>
                </li>

                <li>
                  <div className={styles.menuInfo}>
                    <div className={styles.menuHeader}>
                      {" "}
                      <h4> Pick Up Date </h4>
                    </div>

                    <div className={styles.userInfo}>
                      <img src="images/calender-icon.svg" alt="" />
                    </div>
                  </div>

                  <div className={styles.lineDemacation}></div>
                </li>

                <li>
                  <div className={styles.menuInfo}>
                    <div className={styles.menuHeader}>
                      <h4>Pick Up Time</h4>{" "}
                    </div>

                    <div className={styles.userInfo}>
                      <img src="images/time-icon.svg" alt="" />
                    </div>
                  </div>
                </li>
                <Button type="primary">Search</Button>
              </ul>
            </li>

            <li>
              <Link href="/"> Distance</Link>
            </li>
          </ul>
        </Container>
      </div>

      {/* ///////// SERVICE/////////////*/}

      <div className={styles.ourServiceSection}>
        <Container className={styles.ourService}>
          <div className={styles.ourServiceHeaderSection}>
            <h2>Our Service</h2>
            <h4>Check out our sevices</h4>
          </div>

          <div className={styles.servicesSection}>
            {/* //////SERVICE 1//////// */}

            <div className={styles.service}>
              <div className={styles.serviceImage}>
                <img src="images/airport.jpg" alt="" />
              </div>

              <div className={styles.serviceDetails}>
                <div className={styles.serviceHeader}>
                  <h2>Airport transfer</h2>
                </div>

                <div className={styles.serviceDetailedInfo}>
                  <p>
                    Flying has never been so stress-free: We will take you to
                    the right gate on time with our airport shuttle and pick you
                    up from ther directly
                  </p>
                </div>

                <div className={styles.bookingButton}>
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>

            {/* //////SERVICE 2//////// */}

            <div className={styles.service}>
              <div className={styles.serviceImage}>
                <img src="images/wedding-picture.jpg" alt="" />
              </div>
              <div className={styles.serviceDetails}>
                <div className={styles.serviceHeader}>
                  <h2>Special Events</h2>
                </div>

                <div className={styles.serviceDetailedInfo}>
                  <p>
                    Wheather or shuttle service, we are available around the
                    clock to bring your safely and comfortable from the hotel to
                    the venue and take care or the coordination
                  </p>
                </div>

                <div className={styles.bookingButton}>
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>
            {/* //////SERVICE //////// 3 */}

            <div className={styles.service}>
              <div className={styles.serviceImage}>
                <img src="images/client.jpg" alt="" />
              </div>
              <div className={styles.serviceDetails}>
                <div className={styles.serviceHeader}>
                  <h2>Chauffeur Services</h2>
                </div>

                <div className={styles.serviceDetailedInfo}>
                  <p>
                    Discreet and reliable, our chauffeurs offer you more than
                    just a safe journey from A to B, Take advantage of the
                    advantages of a chauffeur service Frankfurt
                  </p>
                </div>

                <div className={styles.bookingButton}>
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ///////////////////ABOUT US///////////// */}

      <Container className={styles.aboutCompanySection}>
        <div className={styles.aboutCompanyImgSection}>
          <div className={styles.aboutCompanyImgBackground}></div>
          <div className={styles.aboutCompanyImg}>
            <img src="images/about-img.jpg" alt="" />
          </div>
        </div>

        <div className={styles.aboutCompanyDetailedInfo}>
          <div className={styles.aboutCompanyHeader}>
            <h2>About Us</h2>
            <h4>Find out briefly but informatively about us </h4>
          </div>

          <div className={styles.aboutCompanyDetails}>
            <p>
              As an upscale and executive chauffeur and limousine service near
              Frankfurt. We have been ensuring for more 15 years that you get to
              your destination on time and safely. We drive in and around
              Kingston, throughout the Rhime-Main area, as well as beyond to
              destinations throughout Europe. From the Frankfut airport transfer
              to the shuttle service, you can look forward to a professional
              team and comfort of our limousine service.
            </p>
          </div>

          <div className={styles.aboutCompanyDetailedInfoImages}>
            <div className={styles.aboutCompanyDetailedInfoImage}>
              <div className={styles.aboutCompanyDetailedImage}>
                <img src="images/time-progress.png" alt="" />
              </div>
              <div className={styles.aboutCompanyImageInfo}>
                <p>24/7 Exclusive On The Road</p>
              </div>
            </div>

            <div className={styles.aboutCompanyDetailedInfoImage}>
              <div className={styles.aboutCompanyDetailedImage}>
                <img src="images/car1.png" alt="" />
              </div>
              <div className={styles.aboutCompanyImageInfo}>
                <p>From Business To Luxury</p>
              </div>
            </div>

            <div className={styles.aboutCompanyDetailedInfoImage}>
              <div className={styles.aboutCompanyDetailedImage}>
                <img src="images/touch-screen.png" alt="" />
              </div>
              <div className={styles.aboutCompanyImageInfo}>
                <p>Convenient Online Book</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ///////////// OUR FLEET//////////// */}

      <Carousel />

      <Footer />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
