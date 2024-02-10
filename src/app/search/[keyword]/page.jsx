import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword)

  const anime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <div>
        <Header title={`Pencarian untuk "${decodedKeyword}"...`} />
        <AnimeList api={anime} />
      </div>
    </>
  );
};

export default Page;
