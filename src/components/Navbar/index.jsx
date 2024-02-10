import { LinuxLogo } from "@phosphor-icons/react/dist/ssr";
import InputSearch from "./InputSearch";

const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <>
      <div className="pt-6 pb-6 px-4 flex justify-between items-center border-b border-white">
        <Link className="flex" href="/">
          <h3 className="font-bold md:text-3xl text-2xl text-white hover:text-indigo-500 transition-all">
            UR'ANIME
          </h3>
          <LinuxLogo
            className="text-white mx-2 hover:text-indigo-500 transition-all"
            size={30}
          />
        </Link>
        <InputSearch />
      </div>
    </>
  );
};

export default Navbar;
