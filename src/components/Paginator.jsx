import React from 'react';

const Paginator = ({ pageNumber, setPageNumber }) => {

  const handlePageClick = (page) => {
    setPageNumber(page);
  }

  const pageRange = (pageNumber) => {
    if (pageNumber <= 2) {
      return [1, 2, 3];
    }
    return [pageNumber - 2, pageNumber - 1, pageNumber];
  };

  const currentPageRange = pageRange(pageNumber);

  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pr-5 shrink-0 text-center text-xs text-text4 font-abhaya-libre mq925:pl-8 mq925:box-border mq450:pl-5 mq450:box-border">
      <div className="w-[200px] flex flex-row items-start justify-between shrink-0 gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <img
            onClick={() => pageNumber !== 1 ? handlePageClick(pageNumber - 1) : ""}
            role="button"
            tabIndex={0}
            className="w-1.5 h-[13px] relative object-contain cursor-pointer"
            loading="lazy"
            alt="Previous"
            src="/vector-15.svg"
          />
        </div>
        <div className="w-[92px] flex flex-row items-start justify-start gap-[17px]">
          {currentPageRange.map((page) => (
            <div
              key={page}
              className="h-[23px] flex-1 relative text-text3 cursor-pointer"
              onClick={() => handlePageClick(page)}
              role="button"
              tabIndex={0}
            >
              {pageNumber === page && (
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-2 w-full h-full" />
              )}
              <div className="absolute top-[5px] left-[4px] font-semibold flex items-end justify-center w-3.5 h-[13px]">
                {page}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <img
            onClick={() => handlePageClick(pageNumber + 1)}
            role="button"
            tabIndex={0}
            className="w-1.5 h-[13px] relative cursor-pointer"
            loading="lazy"
            alt="Next"
            src="/vector-16.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Paginator;
