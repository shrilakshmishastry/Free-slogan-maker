import SloganMaker from "./SloganMaker";
import FreeProducts from "./FreeProducts";
import Actions from "./Actions";
import PropTypes from "prop-types";
import { FC } from "react";
import styles from "styles/Slogans.module.css";

// export interface MainContentProps {
//   data: Array<any>;
// }

const MainContent: FC<any> = ({ data }) => {
  return (
    <main>
      <section className={`flex justify-center ${styles.sloganContainer}`}>
        <SloganMaker Slogans={data} />
      </section>
      <section>
        <Actions />
      </section>
      <section>
        <FreeProducts />
      </section>
    </main>
  );
};

MainContent.propTypes = {
  data: PropTypes.array,
};

export default MainContent;
