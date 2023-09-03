import React from "react";
import styles from "../components/Review.module.css";
import Image9 from "../AtulKumarSingh_AOI3GJH (1) 1.webp";
import Image10 from "../Group 412.webp";
import Image11 from "../Group 411.webp";
import Image12 from "../rating.webp";

function Review() {
  return (
    <div>
      {/* screen7 */}
      <h1 className={styles.hd}>Master Review</h1>
      <div className={styles.screen7}>
        <div className={styles.slide1}>
        <div className={styles.theory}>
            <h4>
            "MasterTag is a super helpful product the app keeps me connected to
            my belongings at all times, and I can Know their location  with just a simple
            click!"
          </h4>
          </div>
          <hr></hr>
          <span>
            <img src={Image9} alt="#" />
            <div className={styles.deep}>
              <h4>Atul Singhal</h4>
              <h5>Founder & CEO,Cuvette Tech</h5>
              <img src={Image12} alt="#" />
            </div>
          </span>
        </div>
        <div className={styles.slide1}>
        <div className={styles.theory}>
            <h4>
            "Most of the time I leave my phone on silent, but the MasterTag
            never fails to locate it. The reverse phone lookup is
            fantastics.MasterTag is a Lifesaver."
          </h4>
          </div>
          <hr></hr>
          <span>
            <img src={Image10} alt="#" />
            <div className={styles.deep}>
              <h4>Amlan Kumar Sahu</h4>
              <h5>Analyst, AB InBev</h5>
              <img src={Image12} alt="#" />
            </div>
          </span>
        </div>
        <div className={styles.slide1}>
          <div className={styles.theory}>
            <h4>
              "I once lost my wallet, which contained my cards & some cash.Now
              that i have the MasterTag connected,I can find it within seconds
              if I lose it."
            </h4>
          </div>
          <hr></hr>
          <span>
            <img src={Image11} alt="#" />
            <div className={styles.deep}>
              <h4>Sourav K Sanjeev</h4>
              <h5>Student, NIT Puducherry</h5>
              <img src={Image12} alt="#" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Review;
