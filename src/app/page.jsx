import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <>
      <section>
        <Header title="Paling populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
