import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../reducer/reducer';
import { Pagination } from './Pagination';

export const PaginationContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const totalPages = state.info.pages;
  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  useEffect(() => {
    console.log(page);
    dispatch({
      type: 'SAVE_CURRENT_PAGE',
      payload: {
        currentPage: page,
      },
    });
    console.log(state.currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="container">
      <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
    </div>
  );
};
