"use client";

import InitializeAOS from "./InitializeAOS";
import AOSWrapper from "@/helper/AOSWrapper";

const AOSWrap = ({ children }) => {
  return (
    <AOSWrapper>
      <InitializeAOS />
      {children}
    </AOSWrapper>
  );
};

export default AOSWrap;
