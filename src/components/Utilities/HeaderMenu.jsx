import { ArrowDown } from "@phosphor-icons/react";
import Image from "next/image";

const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="p-4">
        <div className="header-menu flex justify-center items-center">
          <h3 className="font-bold md:text-3xl text-xl text-white">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
