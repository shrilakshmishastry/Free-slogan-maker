import {
  FC,
  Children,
  useState,
  useMemo,
  useTransition,
  useId,
  useEffect,
  useRef,
} from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagenations";
import styles from "styles/Slogans.module.css";

// export interface SloganMakersProps {
//   Slogans: {
// text: string;
// author: string;
// tag: string;
//   }[];
// }

const SloganMaker: FC<any> = ({ Slogans }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState("");

  const pageSize = 18;
  const totalCount = Slogans.length;

  const slogans = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return Slogans.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [handleHover, setHandleHover] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const [hoveredPannel, setHoveredPannel] = useState(-1);
  const [copiedPannel, setCopiedPannel] = useState(-1);

  const searchTermId = useId();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextCopied(false);
      setHoveredPannel(-1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [textCopied]);

  const SloganChildren = Children.toArray(
    slogans.map(
      (value: { text: string; author: string; tag: string }, index: number) => {
        return (
          <p
            role={"button"}
            onMouseOver={() => {
              setHandleHover(true);
              setHoveredPannel(index);
            }}
            onMouseOut={() => {
              setHandleHover(false);
              setHoveredPannel(-1);
            }}
            onClick={() => {
              setTextCopied(true);
              setCopiedPannel(index);
            }}
            className={` col-span-1 ${styles.slogan}`}
          >
            {value.text}
          </p>
        );
      }
    )
  );

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Free slogan maker</h1>
        <p className={styles.subtitle}>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
      </div>
      <div className=" flex flex-col mt-12">
        <label className={styles.inputLabel} htmlFor={searchTermId}>
          Word for your slogan
        </label>
        <input
          id={searchTermId}
          placeholder="crazy"
          value={text}
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ${styles.searchIcon}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <button className={styles.generateBtn}>Generate slogans</button>
      </div>
      <div className={styles.separator}></div>
      <div>
        <div className=" flex lg:flex-row flex-col justify-between mt-12">
          <h3 className={styles.slogansTitle}>
            We have generated 1,023 slogans for “cozy”
          </h3>
          <button className={styles.downloadBtn}>Download all</button>
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 auto-rows-auto my-9">
          {Children.map(SloganChildren, (value, index) => {
            return (
              <div>
                {handleHover && hoveredPannel === index && (
                  <span
                    className={`${styles.modal} ${styles.clickToCopyPanel}`}
                  >
                    Click to copy
                  </span>
                )}

                {textCopied && copiedPannel === index && (
                  <span className={`${styles.modal} ${styles.copiedPanel}`}>
                    Copied!
                  </span>
                )}
                {value}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.separator}></div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          siblingCount={1}
          pageSize={pageSize}
          onPageChange={(currentPage: number) => setCurrentPage(currentPage)}
        />
      </div>
    </div>
  );
};

SloganMaker.propTypes = {
  Slogans: PropTypes.array.isRequired,
};
export default SloganMaker;
