import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className=" p-4">
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:gap-7 gap-4">
          {api.data?.map((anime) => {
            return (
              <Link
                className="hover:border-2 hover:bg-indigo-500 border-indigo-500 transition-all rounded"
                href={`/anime/${anime.mal_id}`}
              >
                <Image
                  className="rounded"
                  src={anime.images.webp.image_url}
                  alt="anime"
                  width={200}
                  height={200}
                  priority={true}
                />
                <h3 className="font-bold md:text-xl text-md text-white text-center hover:text-black transition-all mt-4">
                  {anime.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimeList;
