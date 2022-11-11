import Image from "next/image";
import { FC, Children, cloneElement } from "react";
import { freeProdcts } from "utils/MainContent/actions-content";

const freeProd = Children.toArray(
  freeProdcts.map((product) => {
    return (
      <div>
        <h6>{product.title}</h6>
        <Image
          alt={`${product.title}`}
          src={product.icon}
          width={350}
          height={200}
        />
        <p>{product.description}</p>
      </div>
    );
  })
);

const FreeProducts: FC<> = () => {
  return (
    <div>
      Free products
      {Children.map(freeProd, (child) => {
        return <>{child}</>;
      })}
    </div>
  );
};
export default FreeProducts;
