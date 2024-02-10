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
    scrollTop;
  };
  return (
    <>
      <div className="p-8">
        <div className="flex justify-center gap-8 items-center">
          <button
            className="p-1 w-20 bg-amber-500 rounded font-bold hover:text-white transition-all"
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <p className="text-white">
            {page} of {lastPage}
          </p>
          <button
            className="p-1 w-20 bg-amber-500 rounded font-bold hover:text-white transition-all"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
