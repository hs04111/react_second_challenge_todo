import { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 600px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface paramsType {
  coinId: string;
}

interface routeState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<paramsType>();
  const { state } = useLocation<routeState>();
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
