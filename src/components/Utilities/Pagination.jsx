const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setPage((nextpage) => nextpage + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevpage) => prevpage - 1);
    scrollTop();
  };

  return (
    <>
      <div className="p-8">
        <div className="flex justify-center gap-8 items-center">
          {page > 1 ? (
            <button
              className="p-1 w-20 bg-red-900 rounded font-bold text-white hover:text-black transition-all"
              onClick={handlePrevPage}
            >
              Prev
            </button>
          ) : null}

          <p className="text-white font-bold">
            {page} of {lastPage}
          </p>
          {page >= lastPage ? null : (
            <button
              className="p-1 w-20 bg-red-900 rounded font-bold text-white hover:text-black transition-all"
              onClick={handleNextPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
