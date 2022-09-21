import React from 'react';
import classNames from 'classnames';
import styles from './pagination.module.scss';

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, totalPages, handlePagination }) => {
  const firstPage = 1;
  const twoPages = 2;
  const maxNumberLeftButtons = 3;

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        {page !== firstPage && (
          <button
            onClick={() => handlePagination(--page)}
            type="button"
            className={classNames([styles.wrapper__page, styles.wrapper__sides].join(' '))}
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => handlePagination(firstPage)}
          type="button"
          className={classNames(styles.wrapper__page, {
            [styles.active]: page === firstPage,
          })}
        >
          {firstPage}
        </button>
        {page > maxNumberLeftButtons && <div className={styles.wrapper__separator}>...</div>}
        {page === totalPages && totalPages > maxNumberLeftButtons && (
          <button
            onClick={() => handlePagination(page - twoPages)}
            type="button"
            className={styles.wrapper__page}
          >
            {page - twoPages}
          </button>
        )}
        {page > twoPages && (
          <button
            onClick={() => handlePagination(--page)}
            type="button"
            className={styles.wrapper__page}
          >
            {page - firstPage}
          </button>
        )}
        {page !== firstPage && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className={[styles.wrapper__page, styles.active].join(' ')}
          >
            {page}
          </button>
        )}
        {page < totalPages - firstPage && (
          <button
            onClick={() => handlePagination(page + firstPage)}
            type="button"
            className={styles.wrapper__page}
          >
            {page + firstPage}
          </button>
        )}
        {page === firstPage && totalPages > maxNumberLeftButtons && (
          <button
            onClick={() => handlePagination(page + twoPages)}
            type="button"
            className={styles.wrapper__page}
          >
            {page + twoPages}
          </button>
        )}
        {page < totalPages - twoPages && <div className={styles.wrapper__separator}>...</div>}
        {totalPages !== 1 && (
          <button
            onClick={() => handlePagination(totalPages)}
            type="button"
            className={classNames(styles.wrapper__page, {
              [styles.active]: page === totalPages,
            })}
          >
            {totalPages}
          </button>
        )}
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(++page)}
            type="button"
            className={[styles.wrapper__page, styles.wrapper__sides].join(' ')}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
