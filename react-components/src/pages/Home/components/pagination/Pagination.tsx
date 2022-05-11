import React from 'react';
import classNames from 'classnames';
import styles from './pagination.module.scss';

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, totalPages, handlePagination }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={classNames([styles.wrapper__page, styles.wrapper__sides].join(' '))}
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={classNames(styles.wrapper__page, {
            [styles.active]: page === 1,
          })}
        >
          1
        </button>
        {page > 3 && <div className={styles.wrapper__separator}>...</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className={styles.wrapper__page}
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={styles.wrapper__page}
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className={[styles.wrapper__page, styles.active].join(' ')}
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={styles.wrapper__page}
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className={styles.wrapper__page}
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className={styles.wrapper__separator}>...</div>}
        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className={classNames(styles.wrapper__page, {
            [styles.active]: page === totalPages,
          })}
        >
          {totalPages}
        </button>
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}
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
