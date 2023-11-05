import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchCountry(id)
      .then(setCountry)
      .catch(setError)
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        {loader && <Loader />}
        {!error && !loader && <CountryInfo {...country} />}
        {error && <p>{error.message}</p>}
      </Container>
    </Section>
  );
};
