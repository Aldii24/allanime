import InputSearch from "./InputSearch";
import Image from "next/image";

const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <>
      <div className="pt-6 pb-6 px-4 flex justify-between items-center border-b border-white">
        <Link className="flex items-center" href="/">
          <Image
            className="logo-anime rounded-3xl mr-2"
            alt="anime"
            width={50}
            height={50}
            src="/images/logo.jpeg"
          />
          <h3 className="font-bold md:text-3xl text-2xl text-white hover:text-red-900 transition-all">
            UR'ANIME
          </h3>
        </Link>
        <InputSearch />
      </div>
    </>
  );
};

export default Navbar;
