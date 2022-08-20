import { memo } from "react";
import "./pagination.scss";

function Pagination({ handlePageChange, pageIndex, pageCount }) {
  const isNextValid = pageCount > pageIndex + 1;
  const isPrevValid = pageIndex > 0;

  const nextPage = () => {
    if (isNextValid) {
      handlePageChange(pageIndex + 1);
    }
  };

  const prevPage = () => {
    if (isPrevValid) {
      handlePageChange(pageIndex - 1);
    }
  };

  const pages = new Array(pageCount).fill(0).map((p, i) => (
    <span
      key={i}
      onClick={() => handlePageChange(i)}
      className={i === pageIndex ? "active" : ""}
    >
      {i + 1}
    </span>
  ));

  return (
    <footer className="footer-section">
      <div className="pagination">
        <span className={!isPrevValid ? "disabled" : ""} onClick={prevPage}>
          &laquo;
        </span>
        {pages}
        <span className={!isNextValid ? "disabled" : ""} onClick={nextPage}>
          &raquo;
        </span>
      </div>
    </footer>
  );
}

export default memo(Pagination);
