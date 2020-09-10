import React, { FunctionComponent, useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import Seat from '../Seat'

type CinemaProps = {
  horizontalSize: number;
  verticalSize: number;
}

const StyledTable = styled.table`
  background-color: #171219;
  width: 100%;
`;

const StyledTd = styled.td`
  height: 0;
  padding: 0;
  position: relative;

  &::after, &::before {
    content: '';

    display: block;
    padding-bottom: 50%;
  }
`;

const StyledTextarea = styled.textarea`
  overflow: hidden;
  resize: none;
`;

const Cinema: FunctionComponent<CinemaProps> = ({horizontalSize, verticalSize}) => {
  const [seats, setSeats] = useState<{ [id: string] : boolean }>({});

  const handleSeatClick = (_: MouseEvent, id: string) => {
    setSeats((seats) => {
      let newSeats = { ... seats };
      newSeats[id] = !newSeats[id];
      return newSeats;
    });
  }

  useEffect(() => {
    setSeats((seats) => {
      let newSeats = {};
      for(let x = 0; x < horizontalSize; x++) {
        for(let y = 0; y < verticalSize; y++) {
          newSeats[x + ',' + y] = true;
        }
      }

      for (const [key, value] of Object.entries(seats)) {
        if (key in newSeats) {
          newSeats[key] = value;
        }
      }

      return newSeats;
    });
  }, [horizontalSize, verticalSize]);

  return (
    <>
    <StyledTable onContextMenu={() => false} onDragStart={() => false}>
      <tbody>
      {
        [...Array(verticalSize)].map((_, y) =>
        <tr key={',' + y}>
          {
            [...Array(horizontalSize)].map((_, x) =>
            <StyledTd key={x + ',' + y}>
              <Seat key={x + ',' + y} id={x + ',' + y} isASeat={seats[x + ',' + y]} clickHandler={handleSeatClick}></Seat>
            </StyledTd>
            )
          }
        </tr>
        )
      }
      </tbody>

    </StyledTable>
    <StyledTextarea
      readOnly
      rows={verticalSize + 2}
      cols={horizontalSize}
      value={
        verticalSize + '\n' +
        horizontalSize + '\n' +
        [...Array(verticalSize)].map((_, y) => [...Array(horizontalSize)].map((_, x) => seats[x + ',' + y] ? '1' : '0').join('') + '\n').join('')
      }
    />
    </>
  );
}


export default Cinema;
