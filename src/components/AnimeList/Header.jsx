import Link from "next/link";

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <>
      <div className="pt-8 px-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-white md:text-2xl text-xl">{title}</h3>
          {linkHref && linkTitle ? (
            <Link href={linkHref}>
              <p className="font-bold text-white hover:text-red-900 underline transition-all">
                {linkTitle}
              </p>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
