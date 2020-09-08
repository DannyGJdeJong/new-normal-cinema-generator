import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

type SeatProps = {
  id: string
  isASeat: boolean
  clickHandler: (event: MouseEvent, id: string) => void
}

const StyledDiv = styled.div`
  width: 20px;
  height: 20px;
  &.IsASeat {
    background-color: grey;
  }
  &.NotASeat {
    background-color: red;
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
