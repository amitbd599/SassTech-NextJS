"use client";

import { ReactNode } from "react";
import AOSWrapper from "./AOSWrapper";
import InitializeAOS from "./InitializeAOS";

type AOSWrapProps = {
  children: ReactNode;
};

const AOSWrap = ({ children }: AOSWrapProps) => {
  return (
    <AOSWrapper>
      <InitializeAOS />
      {children}
    </AOSWrapper>
  );
};

export default AOSWrap;
