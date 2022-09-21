import { saveCurrentPage } from '../../../../store/appSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/customHooks';
import { Pagination } from './Pagination';

export const PaginationContainer = () => {
  const currentPage = useAppSelector((state) => state.app.currentPage);
  const info = useAppSelector((state) => state.app.info);
  const dispatch = useAppDispatch();

  const handlePages = (updatePage: number) => {
    dispatch(saveCurrentPage(updatePage));
  };

  return (
    <div className="container">
      <Pagination page={currentPage} totalPages={info.pages} handlePagination={handlePages} />
    </div>
  );
};
