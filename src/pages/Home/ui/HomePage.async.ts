import { lazy } from "react";

export const HomePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error simulate delay
      setTimeout(() => resolve(import("./HomePage")), 1500);
    })
);
