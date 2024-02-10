"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchAnime = useRef();
  const pathname = usePathname();

  const handleInputSearch = (event) => {
    const keyword = searchAnime.current.value;
    if (keyword === "" || keyword.trim() === "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  useEffect(() => {
    const path = `${pathname}`;
    const handleRouteChange = () => {
      searchAnime.current.focus();
    };

    path.events?.on("routeChangeComplete", handleRouteChange);

    return () => {
      path.events?.off("routeChangeComplete", handleRouteChange);
    };
  }, [pathname]);

  return (
    <>
      <div className="relative">
        <input
          className="md:p-2 p-1.5 rounded-3xl text-black"
          placeholder="search anime..."
          ref={searchAnime}
          onKeyDown={handleInputSearch}
        />
        <MagnifyingGlass
          size={25}
          className="absolute top-1.5 end-2.5 text-black cursor-pointer"
          onClick={handleInputSearch}
        />
      </div>
    </>
  );
};

export default InputSearch;
