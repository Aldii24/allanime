import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className=" p-4">
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 px-4">
          {api.data?.map((anime) => {
            return (
              <Link href={`/${anime.mal_id}`}>
                <Image
                  src={anime.images.webp.image_url}
                  alt="anime"
                  width={200}
                  height={200}
                />
                <h3 className="font-bold md:text-xl text-md text-white text-center hover:text-amber-500 transition-all mt-4">
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
