import { ReactNode } from "react";
import Navbar from "../Navbar";

const Container = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <div
      className={
        "bg-slate-200 dark:bg-gray-900 min-h-full px-[10%] pt-[150px] pb-[100px]  overflow-x-hidden"
      }
    >
      {children}
    </div>
  </>
);
export default Container;
