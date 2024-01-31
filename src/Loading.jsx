import React from "react";
import LoadingEffect from "./LoadingEffect";

export default function Loading() {
  return (
    <h1 className="font-medium text-3xl flex justify-center items-center">
      <LoadingEffect />
      Loading...
    </h1>
  );
}
