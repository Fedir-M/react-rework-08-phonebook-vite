import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

import s from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={s.wrapperMainLayout}>
      <Header />
      <Suspense
        fallback={
          <BarLoader
            color="#069fa7"
            height={12}
            speedMultiplier={1}
            width={250}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MainLayout;
