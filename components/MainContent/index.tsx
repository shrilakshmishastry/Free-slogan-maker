import SloganMaker from "./SloganMaker";
import FreeProducts from "./FreeProducts";
import Actions from "./Actions";
import PropTypes from "prop-types";
import { FC, useState } from "react";
import Pagination from "./Pagenations";

export interface MainContentProps {
  data: Array;
}

const MainContent: FC<MainContentProps[]> = ({ data }) => {
  const [slogans, setSlogans] = useState([...data]);
  console.log(slogans === data);
  return (
    <main>
      <section>
        <SloganMaker Slogans={data} />
        <Pagination
          currentPage={1}
          totalCount={100}
          siblingCount={1}
          pageSize={2}
          onPageChange={() => console.log("hello")}
        />
      </section>
      <section>
        <FreeProducts />
      </section>
      <section>
        <Actions />
      </section>
    </main>
  );
};

MainContent.propTypes = {
  data: PropTypes.array,
};

export default MainContent;
