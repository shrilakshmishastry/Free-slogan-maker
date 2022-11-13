import Image from "next/image";
import { FC } from "react";
import styles from "styles/Footer.module.css";
import Logo from "images/whitelogo.svg";
import Link from "next/link";
import { Children } from "react";
import {
  footerFirstCol,
  footerSecondCol,
  footerThirdCol,
  footerFifthCol,
  noOfJobOpening,
} from "utils/data/footer-content";
import Flag from "images/flag.svg";

const LinkGenerator: FC<{ data: string[] }> = ({ data }) => {
  const children = Children.toArray(
    data.map((value) => {
      return (
        <Link className="mb-4 text-white" href={""}>
          {value}
        </Link>
      );
    })
  );
  return (
    <>
      {Children.map(children, (value) => {
        return <>{value}</>;
      })}
    </>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContentContainer}>
        <div className={styles.imgContainer}>
          <Image
            alt="Dukkan logo"
            fill={false}
            src={Logo}
            height="44"
            width="156"
            className=" h-10"
          />
        </div>
        <div className={styles.commonContainer}>
          <LinkGenerator data={footerFirstCol} />
        </div>
        <div className={styles.commonContainer}>
          <LinkGenerator data={footerSecondCol} />
        </div>
        <div className={styles.commonContainer}>
          <LinkGenerator data={footerThirdCol} />
        </div>
        <div className={styles.commonContainer}>
          <Link className="mb-4  text-white" href={""}>
            About
          </Link>
          <Link className="mb-4 text-white  flex " href={""}>
            Jobs
            <span className={styles.noOfJobs}>{noOfJobOpening}</span>
          </Link>
        </div>
        <div className={styles.commonContainer}>
          <LinkGenerator data={footerFifthCol} />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className=" flex justify-between flex-col lg:flex-row">
        <span>Dukaan 2020, All rights reserved.</span>
        <div className=" flex mt-4 lg:mt-0">
          <span>Made in </span>
          <Image
            alt="With love India"
            fill={false}
            src={Flag}
            height="27"
            width="18"
            className="mt-2 ml-2"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
