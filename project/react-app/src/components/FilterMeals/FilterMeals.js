import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import classes from './FilterMeals.module.css';

export default function FilterMeals(props) {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('effect触发了');
      props.onFilter(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const inputChangeHandler = e => {
    // const keyword = e.target.value.trim()
    // props.onFilter(keyword)
    setKeyword(e.target.value.trim());
  };

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          value={keyword}
          className={classes.SearchInput}
          type="text"
          placeholder="请输入关键字"
          onChange={inputChangeHandler}
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
}
