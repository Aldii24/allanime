"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchDataPopuler = async () => {
    const anime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(anime);
  };

  useEffect(() => {
    fetchDataPopuler();
  }, [page]);

  return (
    <>
      <div>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
