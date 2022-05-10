import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../reducer/reducer';
import { Pagination } from './Pagination';

export const PaginationContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const [page, setPage] = useState(state.currentPage);
  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  useEffect(() => {
    dispatch({
      type: 'SAVE_CURRENT_PAGE',
      payload: {
        currentPage: page,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="container">
      <Pagination page={page} totalPages={state.info.pages} handlePagination={handlePages} />
    </div>
  );
};
