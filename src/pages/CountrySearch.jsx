import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [listCountry, setListCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchByRegion(region)
      .then(setListCountry)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [region]);

  const onSubmit = region => {
    setRegion(region);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {listCountry.length > 0 && <CountryList countries={listCountry} />}
        {error && <Heading />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
