import type { ReactNode } from "react";

import Navigation from "@/components/Navigation";

import "@/components/Container/Container.scss";

interface ContainerProps {
  leftChildren?: ReactNode | ReactNode[];
  rightChildren?: ReactNode | ReactNode[];
}

const Container = ({
  leftChildren = null,
  rightChildren = null,
}: ContainerProps) => {
  return (
    <div className="container">
      <div className="left">
        <div className="left__menu">
          <Navigation />
        </div>
        <div className="left__content">{leftChildren}</div>
      </div>
      <div className="right">{rightChildren}</div>
    </div>
  );
};

export default Container;
