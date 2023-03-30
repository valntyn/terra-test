import { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

import styles from './FilterBar.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { setQuery } from '../../features/querySlice/querySlice';
import { getSearchWith } from '../../helpers/searchHelpers';

export const FilterBar = memo(
  () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const query = searchParams.get('query') || '';
    const [search, setSearch] = useState(query);

    const debouncedOnChange = useDebouncedCallback((event) => {
      dispatch(setQuery(event.target.value));
    }, 500);

    const handleQuery
      = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);

        setSearchParams(
          getSearchWith(searchParams, {
            query: event.target.value || null,
          }),
        );
      };

    useEffect(() => {
      dispatch(setQuery(query));
    }, [dispatch]);

    return (
      <div className={styles.bar}>
        <label
          className={styles.inputBox}
          htmlFor="input"
        >
          <button
            type="button"
            className="bg-inherit ml-5 border-[none]"
          >
            <div className={styles.image} />
          </button>
          <input
            id="input"
            type="text"
            className={styles.input}
            placeholder="Search in catalogue..."
            value={search}
            onChange={(e) => {
              handleQuery(e);
              debouncedOnChange(e);
            }}
            autoComplete="off"
          />
        </label>
      </div>
    );
  },
);
