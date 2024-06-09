import React from "react";
import Nave from "../components/layout/Nave";

export default function layout({ children }) {
  return (
    <div>
      <Nave />
      {children}{" "}
    </div>
  );
}
