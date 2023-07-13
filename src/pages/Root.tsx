import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Root() {
  return (
    <>
      <Header />
      <Main>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </Main>
    </>
  );
}
