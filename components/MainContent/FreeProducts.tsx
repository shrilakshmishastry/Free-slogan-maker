import Image from "next/image";
import { FC, Children, cloneElement } from "react";
import { freeProdcts } from "utils/data/actions-content";
import styles from "styles/FreeProducts.module.css";

const freeProd = Children.toArray(
  freeProdcts.map((product) => {
    return (
      <div className="">
        <Image
          alt={`${product.title}`}
          src={product.icon}
          width={290}
          height={200}
        />
        <h6 className={styles.cardTitle}>{product.title}</h6>
        <p className={styles.subTitle}>{product.description}</p>
      </div>
    );
  })
);

const FreeProducts: FC<{}> = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Try our other free products</h2>
      <div className={styles.cardContainer}>
        {Children.map(freeProd, (child) => {
          return <>{child}</>;
        })}
      </div>
    </div>
  );
};
export default FreeProducts;
