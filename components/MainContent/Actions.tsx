import Image from "next/image";
import { FC, Children } from "react";
import { actionContent } from "utils/data/actions-content";
import styles from "styles/Action.module.css";

const ActionChildren = Children.toArray(
  actionContent.map((action) => {
    return (
      <div className={styles.contentContainer}>
        <Image alt={action.title} height={48} width={48} src={action.icon} />
        <h6 className={styles.title}>{action.title}</h6>
        <p className={styles.subTitle}>{action.description}</p>
      </div>
    );
  })
);

const Actions: FC<{}> = () => {
  return (
    <div className={styles.container}>
      {Children.map(ActionChildren, (child) => {
        return <>{child}</>;
      })}
    </div>
  );
};
export default Actions;
