import { useContext } from 'react';
import { AppContext } from '../../../../reducer/reducer';
import { Pagination } from './Pagination';

export const PaginationContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const handlePages = (updatePage: number) => {
    dispatch({
      type: 'SAVE_CURRENT_PAGE',
      payload: {
        currentPage: updatePage,
      },
    });
  };

  return (
    <div className="container">
      <Pagination
        page={state.currentPage}
        totalPages={state.info.pages}
        handlePagination={handlePages}
      />
    </div>
  );
};
