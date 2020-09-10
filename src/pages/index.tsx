import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Cinema from '../components/Cinema'

const StyledDiv = styled.div`
  width: 40%;
  margin: auto;
`;

const Home: FunctionComponent = () => {
  const [horizontalSize, setHorizontalSize] = useState<number>(15);
  const [verticalSize, setVerticalSize] = useState<number>(15);

  const handleHorizontalSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHorizontalSize(parseInt(event.target.value));
  }

  const handleVerticalSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVerticalSize(parseInt(event.target.value));
  }

  return (
    <StyledDiv>
      <p>Horizontal size:</p>
      <input type="number" value={horizontalSize} onChange={handleHorizontalSizeChange}></input>
      <p>Vertical size:</p>
      <input type="number" value={verticalSize} onChange={handleVerticalSizeChange}></input>

      <Cinema horizontalSize={horizontalSize} verticalSize={verticalSize}></Cinema>
    </StyledDiv>
  );
}

export default Home;
