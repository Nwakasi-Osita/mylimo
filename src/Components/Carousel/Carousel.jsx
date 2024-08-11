import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css";
import { Container } from "../Container/Container";
import { properties } from "@/data/properties";
import { Property } from "../Property/Property";

export default function CarouselPage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className={styles.ourFleetSection}>
        <Container className={styles.ourFleet}>
          <div className={styles.ourFleetSectionHeader}>
            <h2>Our Fleet</h2>
            <h4> Take a look at our fleet </h4>
          </div>

          <Carousel responsive={responsive} className={styles.propertyDetails}>
            {/* {properties.map((property, i) => (
             */}
            {properties.map((property, i) => (
              <Property
                key={`property-${i}`}
                property={property}
                onClick={() => setSelectedItem(property)}
              />
            ))}
          </Carousel>
          {/* <PropertyModal
            {...selectedItem}
            onClose={() => setSelectedItem(null)}
          /> */}
        </Container>
      </div>
    </>
  );
}
