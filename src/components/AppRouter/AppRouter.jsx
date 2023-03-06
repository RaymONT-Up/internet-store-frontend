import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../utils/routes";
import { SHOP_ROUTE } from "../../utils/consts";
import NotFound from "../NotFound/NotFound";
const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} exact />;
      })}

      <Route path="/" element={<Navigate to={SHOP_ROUTE} replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
