import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import Card from './components/Card';
import getLots from './Redux/actions/lotsAction';

function App() {
  const dispatch = useDispatch();
  const lots = useSelector((state) => state.lot);
  useEffect(() => {
    dispatch(getLots());
  }, []);
  return (
    <Container>
      {
        lots.length ? lots.map((item) => <Card item={item} key={item.id} />) : 'Лотов нет'
      }
    </Container>
  );
}

export default App;
