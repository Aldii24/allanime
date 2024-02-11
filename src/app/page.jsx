import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnime, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendedAnime = await getNestedAnime("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 5)

  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="Paling populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* anime rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
