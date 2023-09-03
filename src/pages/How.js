<<<<<<< HEAD
import React from 'react'

function How() {
    return (
        <div>How</div>
    )
}

export default How
=======
import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/How.module.css";
// import { Link } from 'react-router-dom';

function How() {
    return (
        <div>
            <Navbar />
            <br /> <br /> <br />
            <div className={styles.head}>
                <h1>How we solve?</h1>
                <p>MasterTag helps you to keep track of your assets!</p>
                <ul>
                    <li> <a href="#mainFeatures" > Main Features </a></li>
                    <li><a href="#hardwareFeatures" > Hardware Features </a></li>
                    <li><a href="#techSpace" > Tech Space </a></li>
                </ul>
                <a
                    href="https://www.youtube.com/watch?v=HYQU45cuai0"
                    className={styles.btn1}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Watch Video>
                </a>
            </div>
            <div className={styles.firstPart} id="mainFeatures">
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src=".././assets/Home pg.webp" alt="pic1" />
                    </div>
                    <div className={styles.text}>
                        <h2>Keep Track</h2>
                        <p>
                            Mastertag is a simple way to keep track of your stuff. Tag one on
                            your keys. Put one in your backpack. Stick another on your TV
                            remote. And there they are in the MasterTag app.
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>Find Your Stuff!</h2>
                        <p>
                            Why spend your time searching for lost assets when they can speak
                            and tell you where they are. Here is the smart & easy way to find
                            your everyday essentials with MasterTag!
                        </p>
                    </div>
                    <div className={styles.pic}>
                        <img src=".././assets/Keys.webp" alt="pic2" />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src=".././assets/Play.webp" alt="pic3" />
                    </div>
                    <div className={styles.text}>
                        <h2>Assets Speaks</h2>
                        <p>
                            Misplacing something like your wallet doesn’t have to be a big
                            deal when it has a MasterTag attached. Just tap “Play Sound” in
                            the MasterTag app and the MasterTag on your keys will ring.
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>Master Alerts</h2>
                        <p>
                            MasterTag alerts you leave anything behind, no matter where you
                            are or where you move. We will make sure that you leave that
                            location with all of the MasterTaged items you brought with you.
                        </p>
                    </div>
                    <div className={styles.pic}>
                        <img src=".././assets/MasterAlert.webp" alt="pic4" />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src=".././assets/LocHistory.webp" alt="pic5" />
                    </div>
                    <div className={styles.text}>
                        <h2>Master History</h2>
                        <p>
                            If you lose something when you're out and about, MasterTag can
                            help you locate it. View its most recent location on maps. It'll
                            show you the last time when it was with you and also you can see
                            the last 30 days location history.
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>Find Your Phone</h2>
                        <p>
                            Lost your phone? Make your phone ring by using MasterTag, like the
                            ones on your keys or wallet. Press the MasterTag button twice. It
                            works even if your phone is on silent.
                        </p>
                    </div>
                    <div className={styles.pic}>
                        <img src=".././assets/PhoneRing.webp" alt="pic6" />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src=".././assets/Community.webp" alt="pic7" />
                    </div>
                    <div className={styles.text}>
                        <h2>Find Together</h2>
                        <p>
                            ‘MasterTag Community’ helps to find; When you lose your MasterTag,
                            enable Lost Mode in the MasterTag app, whenever any MasterTag app
                            detects it, you'll receive an automatic notification of its
                            location!
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2>Master Scan</h2>
                        <p>
                            This feature enables you to quickly scan and detect any unknown
                            MasterTags that may be traveling with you. MasterTag is designed
                            to locate lost or misplaced items, not to track people.
                        </p>
                    </div>
                    <div className={styles.pic}>
                        <img src=".././assets/ScanSecure.webp" alt="pic8" />
                    </div>
                </div>
            </div>

            <div className={styles.secondPart} id="hardwareFeatures">
                <div className={styles.head2}>
                    <h1>
                        Hardware Features
                    </h1>
                    <p>
                        The features which makes MasterTag device
                    </p>
                </div>

                <div className={styles.container2}>
                    <div className={styles.row}>
                        <div className={styles.box}>
                            <div className={styles.pic2}>
                                <img src=".././assets/HashTag-Device-small-size-4.webp" alt="" />
                            </div>
                            <div className={styles.text2}>
                                <h3>
                                    Life-Time Finding
                                </h3>
                                <p>
                                    One charge = 4-6 months life
                                </p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.pic2}>
                                <img src=".././assets/HashTag-Device-small-size-5.webp" alt="" />
                            </div>
                            <div className={styles.text2}>
                                <h3>
                                    Loud Ring
                                </h3>
                                <p>
                                    High Volume | 98dB Sound
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.box}>
                            <dic className={styles.pic2}>
                                <img src=".././assets/HashTag-Device-small-size-7.webp" alt="" />
                            </dic>
                            <div className={styles.text2}>
                                <h3>
                                    Long Range
                                </h3>
                                <p>
                                    Up to 80 meters superfast range
                                </p>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.pic2}>
                                <img src=".././assets/HashTag-Device-small-size-6.webp" alt="" />
                            </div>
                            <div className={styles.text2}>
                                <h3>
                                    Flash It
                                </h3>
                                <p>
                                    Lights-based tracking | 2 LEDs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.box}>
                            <div className={`${styles.pic2} ${styles.large}`}>
                                <img src=".././assets/Ring-hole-1.webp" alt="" />
                            </div>
                            <div className={styles.text2}>
                                <h3>
                                    Tag Hole
                                </h3>
                                <p>
                                    Easy to attach with assets
                                </p>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={`${styles.pic2} ${styles.large}`}>
                                <img src=".././assets/Water-Proof-1.webp" alt="" />
                            </div>
                            <div className={styles.text2}>
                                <h3>
                                    IP67
                                </h3>
                                <p>
                                    Water | Splash | Dust Proof
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.thirdPart} id="techSpace">
                    <div className={styles.head3}>
                        <h1>
                            MasterTag Tech Space
                        </h1>
                        <p>
                            Detailed parameters of MasterTag device.
                        </p>
                    </div>

                    <div className={styles.container3}>
                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Size and Weight
                            </div>
                            <div className={styles.infoDiff}>
                                <div className={styles.size}>
                                    <h3>
                                        Size
                                    </h3>
                                    <p>
                                        Length = Width: 38mm <br />
                                        Height: 5.5mm
                                    </p>
                                </div>
                                <div className={styles.weight}>
                                    <h3>
                                        Weight
                                    </h3>
                                    <p>
                                        10 grams
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Splash, Water & Dust Resistance
                            </div>
                            <div className={styles.info}>
                                Rated IP67 (maximum depth of 1 metre
                                up to 30 minutes)
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Connectivity
                            </div>
                            <div className={styles.info}>
                                Bluetooth Low Energy 5.0 <br />
                                Range: Up to 262 foot (80m)
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Speaker
                            </div>
                            <div className={styles.info}>
                                Built-in speaker <br />
                                Volume: 98dB
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Light
                            </div>
                            <div className={styles.info}>
                                2 LEDs <br />
                                Blue and Red light
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Battery
                            </div>
                            <div className={styles.info}>
                                Rechargeable built-in battery <br />
                                Life: 4-6 months per package
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Accessibility
                            </div>
                            <div className={styles.info}>
                                MasterTag App <br />
                                Supports both Android and iOS
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Environmental Requirements
                            </div>
                            <div className={styles.info}>
                                Operating temperature: -40°C ~ +70°C <br />
                                Storage temperature:
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Accessories
                            </div>
                            <div className={styles.info}>
                                Charging cable | Tag | 3M Sticker
                            </div>
                        </div>

                        <div className={styles.row3}>
                            <div className={styles.topic}>
                                Certifications
                            </div>
                            <div className={styles.info}>
                                CE | FCC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default How;
>>>>>>> 0fe9625cb5e7fadad5d7756baf49fc45259386af
