import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../utils/routes";
import { SHOP_ROUTE } from "../../utils/consts";
import NotFound from "../NotFound/NotFound";
import { useSelector } from "react-redux";
const AppRouter = () => {
  const isAuth = useSelector(store => store.user.isAuth);
  console.log(isAuth);
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
