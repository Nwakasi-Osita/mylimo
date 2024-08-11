import Link from "next/link";
import styles from "./Property.module.css";

export const Property = (props) => {
  const handleClick = (event) => {
    if (typeof props.onClick === "function") {
      props.onClick(event);
    }
  };

  return (
    <div className={styles.propertyDetails} onClick={handleClick}>
      <div className={styles.propertyImg}>
        <img src={props.img} />
      </div>

      {/* <h4 className={styles}>ueneudnd</h4> */}

      <div className={styles.carDescription}>
        <div className={styles.carDetails}>
          <div className={styles.carDetail}>
            <div className={styles.carName}>
              <h4>{props.property.carName}</h4>
            </div>
            <div className={styles.carDetailImg}>
              <img src={props.property.img} alt="" />
            </div>

            <div className={styles.aboutCar}>
              {/* //////  1 ////// */}

              <div className={styles.aboutCarDetail}>
                <div className={styles.aboutCarDetailImg}>
                  <img src={props.property.milesAccelerationImg} alt="" />
                </div>

                <div className={styles.aboutCarDetailInfo}>
                  {props.property.miles}
                </div>
              </div>

              {/* //////  2 ////// */}

              <div className={styles.aboutCarDetail}>
                <div className={styles.aboutCarDetailImg}>
                  <img src={props.property.fuelTypeImg} alt="" />
                </div>

                <div className={styles.aboutCarDetailInfo}>
                  {props.property.fuelType}
                </div>
              </div>

              {/* //////  3 ///// */}

              <div className={styles.aboutCarDetail}>
                <div className={styles.aboutCarDetailImg}>
                  <img src={props.property.carTypeImg} alt="" />
                </div>

                <div className={styles.aboutCarDetailInfo}>
                  {props.property.carType}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
