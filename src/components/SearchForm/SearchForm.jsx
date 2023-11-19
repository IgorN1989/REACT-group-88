import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
     e.preventDefault();
    const frm = e.target;

    const text = frm.elements.search.value;
    const id = nanoid();
    dispatch(
      addTodo({
        id,
        text,
      })
    );
    frm.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
