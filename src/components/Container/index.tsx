import type { ReactNode } from "react";

import "@/components/Container/Container.scss";

interface ContainerProps {
  leftChildren: ReactNode | ReactNode[];
  rightChildren: ReactNode | ReactNode[];
}

const Container = ({ leftChildren, rightChildren }: ContainerProps) => {
  return (
    <div className="container">
      <div className="left">{leftChildren}</div>
      <div className="right">{rightChildren}</div>
    </div>
  );
};

export default Container;
