import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";

export function DefaultLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}