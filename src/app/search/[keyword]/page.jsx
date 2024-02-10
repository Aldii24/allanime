"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import PaginationSearch from "@/components/Utilities/PaginationSearch";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const [page, setPage] = useState(1);
  const [anime, setTopAnime] = useState([]);

  const fetchDataSearch = async () => {
    const data = await getAnimeResponse("anime", `q=${decodedKeyword}`, `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchDataSearch();
  }, [page]);

  return (
    <>
      <div>
        <Header title={`Pencarian untuk "${decodedKeyword}"...`} />
        <AnimeList api={anime} />
        <PaginationSearch
          page={page}
          lastPage={anime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
