import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AttchedBox from "../components/AttchedBox";
export default function Home() {
  return (
    <>
      {/* navbar */}
      <div className={styles.header}>
        <Navbar />
        <div className={styles.main_box}>
          <div className={styles.row_1}>
            <h1>
              Every Purchase <br /> Will Be Made <br /> With Pleasure
            </h1>
            <br />
            <p>
              Buying and selling of goods or services <br />
              using the internet.
            </p>
            <br />
            <button>
              start shopping{" "}
              <BsFillArrowRightCircleFill color="white" size={25} />
            </button>
          </div>
          <div className={styles.row_2}>
            <img
              src="/static/2nd-t-shirt.png"
              alt=""
              width={400}
              className={styles.img}
            />
            <img
              src="/static/4th-t-shirt.png"
              alt=""
              width={350}
              className={styles.img_1}
            />
            <img
              src="/static/t-shirt.png"
              alt=""
              width={350}
              className={styles.img_2}
            />
            <img
              src="/static/pillow.png"
              alt=""
              width={300}
              className={styles.img_3}
            />
          </div>
        </div>

     <AttchedBox/>
      </div>

    </>
  );
}
