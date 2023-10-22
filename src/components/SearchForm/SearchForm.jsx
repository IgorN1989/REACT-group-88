import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchValue.value;
    this.props.onSubmit(value);
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn>
          <FiSearch />
        </FormBtn>
        <InputSearch name="searchValue" />
      </SearchFormStyled>
    );
  }
}
