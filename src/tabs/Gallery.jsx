import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    photos: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      const {
        data: { photos, total_results },
      } = await ImageService.getImages({
        query: this.state.query,
        page: this.state.page,
      });
      this.setState(prev => ({ photos: [...prev.photos, ...photos] }));
    }
  }

  onSubmit = query => {
    if (!query) return;
    this.setState({
      query,
    });
  };

  render() {
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm onSubmit={this.onSubmit} />
      </>
    );
  }
}
