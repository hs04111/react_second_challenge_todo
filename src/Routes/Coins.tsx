import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const CoinsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin: 10px 0px;
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  a {
    padding: 15px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in-out;
  }
  border-radius: 7px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 8px;
`;

interface coinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<coinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
