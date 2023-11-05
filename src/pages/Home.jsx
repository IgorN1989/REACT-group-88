import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const Home = () => {
  const [listCountry, setListCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchByRegion()
      .then(setListCountry)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {listCountry.length > 0 && <CountryList countries={listCountry} />}
        {error && <Heading>{error.message}</Heading>}
      </Container>
    </Section>
  );
};
