import InputSearch from "./InputSearch";

const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <>
      <div className="p-6 flex justify-between items-center border-b border-white">
        <Link href="/">
          <h3 className="font-bold md:text-3xl text-2xl text-white">
            UR'ANIME
          </h3>
        </Link>
        <InputSearch />
      </div>
    </>
  );
};

export default Navbar;
