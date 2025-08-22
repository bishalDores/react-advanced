import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => {
        return (
          <Route
            path={path}
            element={
              <Suspense key={path} fallback={<PageLoader />}>
                {element}
              </Suspense>
            }
            key={path}
          />
        );
      })}
    </Routes>
  );
};
