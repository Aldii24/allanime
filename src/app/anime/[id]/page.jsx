import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  return (
    <>
      <div className="p-4 mt-8">
        <div className="flex md:flex-row sm:flex-col flex-col gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-full h-96 rounded-3xl bg-red-900">
              <Image
                className="md:w-80 rounded-3xl w-full"
                src={anime.data.images.webp.image_url}
                alt="anime"
                width={250}
                height={250}
              />
              <h3 className="text-white font-bold text-3xl mt-4 text-center">
                {anime.data.title} - {anime.data.year} | {anime.data.type}
              </h3>
              <Link
                href={anime.data.url}
                className="p-2 mt-2 w-16 bg-black rounded text-white text-center cursor-pointer"
              >
                Details
              </Link>
              <div></div>
            </div>
            <div className="mt-10">
              <h3 className="text-red-900 text-3xl font-bold">SYNOPSYS</h3>
              <p className="text-white text-justify">{anime.data.synopsis}</p>
            </div>
          </div>
          <div>
            <h3 className="text-red-900 text-3xl md:hidden mb-2 font-bold">
              TRAILER
            </h3>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
