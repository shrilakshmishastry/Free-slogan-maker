import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import styles from "styles/Navbar.module.css";
import Logo from "images/whitelogo.svg";

const Navbar: FC<{}> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className=" flex max-w-full lg:flex-row flex-col pt-5 justify-between lg:px-40 px-4">
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <Image
              alt="Dukkan logo"
              fill={false}
              src={Logo}
              height="44"
              width="156"
              className=" h-10"
            />
          </Link>
          <button
            className=" lg:hidden pr-2"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#ffffff"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex " +
            (navbarOpen
              ? `flex justify-center lg:bg-none z-40 lg:pb-0 pb-10 ${styles.menuDropDown}`
              : "hidden")
          }
        >
          <ul className="flex lg:flex-row items-center flex-col text-white text-lg">
            <li className=" mr-8 lg:my-0 my-5">
              <Link href={"/"}>Sign In</Link>
            </li>
            <li>
              <button className={styles.pcBtn} onClick={() => {}}>
                Dukaan for PC
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
