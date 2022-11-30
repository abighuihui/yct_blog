import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagenation = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props; //从调用方movie传过来的(电影总数，一页显示电影数)
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize); //页数,ceil取整数
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagenation.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagenation;
