import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className=" p-4">
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:gap-7 gap-4">
          {api.data?.map((anime) => {
            return (
              <div className="border md:shadow-[4px_4px_20px_5px_#0B60B0] shadow-[1px_1px_10px_2px_#0B60B0] hover:bg-indigo-500 border-white transition-all rounded">
                <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                  <Image
                    className="rounded"
                    src={anime.images.webp.image_url}
                    alt="anime"
                    width={200}
                    height={200}
                    priority={true}
                  />
                  <h3 className="font-bold md:text-xl text-md border-b text-white text-center hover:text-black transition-all mt-4">
                    {anime.title}
                  </h3>
                </Link>
                <div className="px-4 mt-2 mb-2 flex justify-between">
                  <p className="text-white md:text-lg text-sm">
                    type : <span className="text-amber-500">{anime.type}</span>
                  </p>
                  <p className="text-white md:text-lg text-sm">
                    score :{" "}
                    <span className="text-amber-500">{anime.score}</span>
                  </p>
                </div>
                <div className="px-4 mt-2 mb-2 flex justify-between">
                  <p className="text-white md:text-lg text-sm">
                    rank : <span className="text-amber-500">{anime.rank}</span>
                  </p>
                  <p className="text-white md:text-lg text-sm">
                    source :{" "}
                    <span className="text-amber-500">{anime.source}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimeList;
