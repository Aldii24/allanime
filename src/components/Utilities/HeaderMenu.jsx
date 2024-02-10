import { ArrowDown } from "@phosphor-icons/react";

const HeaderMenu = ({ title }) => {
  const scrollDown = () => {
    scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="pt-8 pb-4">
        <div className="flex justify-center items-center">
          <h3 className="font-bold md:text-3xl text-xl text-white">{title}</h3>
        </div>
        <ArrowDown
          size={30}
          className="p-2 md:w-10 absolute top-32 end-8 bg-amber-500 rounded cursor-pointer"
          onClick={scrollDown}
        />
      </div>
    </>
  );
};

export default HeaderMenu;
