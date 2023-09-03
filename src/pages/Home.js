import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import styles from "../styles/Home.module.css";
import Image1 from "../Group 195.webp";
import Image2 from "../Group 245.webp";
import Image3 from "../Group 424 (1).webp";
import Image4 from "../MasterTag Device 3.webp";
import Image5 from "../Group 43.webp";
import Image6 from "../17925 1.webp";
import Image7 from "../4192736 1.webp";
import Image8 from "../shield.webp";
import Image13 from "../Layer 4.webp";
import Image14 from "../Layer 3.webp";
import image1 from "./image1.webp";
import image2 from "./image2.webp";
import image3 from "./image3.webp";

function Home() {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.div1}>
        <img src={images[index]} alt="Slider" />
        <div className={styles.div2}>
          <h4>LIMITED TIME OFFER</h4>
          <h1>
            Save flat 60% + get
            <span> free accessories</span>
          </h1>
          <button className={styles.shop}>Shop Now</button>
          <button className={styles.cart}>Add to Cart</button>
        </div>
        {/* screen2 */}
      </div>
      <div className={styles.screen2}>
        <h2>
          <span>Tag it.</span>
          <b>Find it.</b>
        </h2>
        <h4>MasterTag is super-easy way to find & keep track of your stuff!</h4>
        <button className={styles.shop}>Shop Now</button>
        <img src={Image1} alt="#" />
      </div>
      {/* screen3 */}
      <div className={styles.screen3}>
        <img src={Image2} alt="#" />
        <div className={styles.box}>
          <h1>Keep Track of Them</h1>
          <h4>
            Mastertag is a simple way to keep track of your stuff. Tag one on
            your keys.Put one in your backpack.Stick another on your Tv remote.
            And there they are in the masterTag app
          </h4>
          <button className={styles.shop2}>Shop Now</button>
          <button className={styles.cart2}>Add to Cart</button>
        </div>
      </div>
      {/* screen4 */}
      <div className={styles.screen4}>
        <div className={styles.box2}>
          <h1>Life-Time Finding</h1>
          <h3>One charge = 4-6 months Life</h3>
          <h4>
            MasterTag is India's first re-chargable BLE tracking device, powered
            by an inbuilt lithium-ion battery with magnetic charger.
          </h4>
        </div>
        <img src={Image3} alt="#" />
      </div>
      {/* screen5 */}
      <div className={styles.container1}>
        <button>More Features &#9655;</button>
        <h1>Order your MasterTag</h1>
        <h4>
          MasterTag makes your life easier to find & Keep track of your everyday
          essentials.
        </h4>
        <div className={styles.container2}>
          <div className={styles.card1}>
            <button className={styles.button3}>60% off</button>
            <br></br>
            <img src={Image4} alt="#" />
            <p>
              &#8377;999 <s>(&#8377;2499)</s>
              <br></br>
              Free Shipping on All Orders
            </p>
            <button className={styles.button1}>Shop Now</button>
            <br></br>
            <button className={styles.button2}>Add to cart</button>
          </div>
          <div className={styles.card2}>
            <button className={styles.button3}>60% off</button>
            <br></br>
            <img src={Image5} alt="#" />
            <p>
              &#8377;1999 <s>(&#8377;4999)</s>
              <br></br>
              Free Shipping on All Orders
            </p>
            <button className={styles.button1}>Shop Now</button>
            <br></br>
            <button className={styles.button2}>Add to cart</button>
          </div>
        </div>
      </div>
      {/* screen6 */}
      <div className={styles.screen6}>
        <div>
          <img src={Image6} alt="#" />
          <span className={styles.tt}>
            <h5>Free Accessories</h5>
            <h8>Charging Cable + Tag + 3M Sticker</h8>
          </span>
        </div>
        <div>
          <img src={Image7} alt="#" />
          <span className={styles.tt}>
            <h5>Free Shipping</h5>
            <h8>On order above &#8377;2k</h8>
          </span>
        </div>
        <div>
          <img src={Image8} alt="#" />
          <span className={styles.tt}>
            <h5>Worry Free Warranty</h5>
            <h8>Tension free warrenty for 6 months</h8>
          </span>
        </div>
      </div>

      {/* review section exported from components folder */}
      <Review />

      {/* last */}
      <div className={styles.last}>
        <h1>MasterTag App</h1>
        <h5>
          Our user-friendly app will be available on google play and the Apple
          APP Store.
        </h5>
        <img src={Image13} alt="#" />
        <img src={Image14} alt="#" />
      </div>
      {/* footer */}
      <div className={styles.footer}>
        <div>
          <h2>Footer section needed to exported </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
