import { FC, Children } from "react";
import PropTypes from "prop-types";

export interface SloganMakersProps {
  text: string;
  author: string;
  tag: string;
}

const SloganMaker: FC<SloganMakersProps[]> = ({ Slogans }) => {
  const SloganChildren = Children.toArray(
    Slogans.map((value) => {
      return <p>{value.text}</p>;
    })
  );

  return (
    <div>
      SloganMaker
      {Children.map(SloganChildren, (value) => {
        return <>{value}</>;
      })}
    </div>
  );
};

SloganMaker.propTypes = {
  Slogans: PropTypes.array,
};
export default SloganMaker;
