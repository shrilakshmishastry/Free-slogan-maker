import Image from "next/image";
import { FC, Children } from "react";
import { actionContent } from "utils/MainContent/actions-content";

const ActionChildren = Children.toArray(
  actionContent.map((action) => {
    return (
      <>
        <h6>{action.title}</h6>
        <Image alt={action.title} height={48} width={48} src={action.icon} />
        <p>{action.description}</p>
      </>
    );
  })
);

const Actions: Fc<> = () => {
  return (
    <div>
      Actions
      {Children.map(ActionChildren, (child) => {
        return <>{child}</>;
      })}
    </div>
  );
};
export default Actions;
