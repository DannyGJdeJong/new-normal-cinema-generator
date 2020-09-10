import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

type SeatProps = {
  id: string
  isASeat: boolean
  clickHandler: (event: MouseEvent, id: string) => void
}

const StyledDiv = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &.IsASeat {
    background-color: yellow;
  }
  &.NotASeat {
    background-color: grey;
  }
`;

const Seat: FunctionComponent<SeatProps> = ({id, isASeat, clickHandler}) => {
  const handleClick = (event: MouseEvent) => clickHandler(event, id);

  return (
    <>
      <StyledDiv onClick={handleClick} className={isASeat ? "IsASeat" : "NotASeat"}>

      </StyledDiv>
    </>
  );
}


export default Seat;
